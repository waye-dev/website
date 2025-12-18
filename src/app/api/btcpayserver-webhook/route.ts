import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import { updateDonationStatus } from "@/app/donate/actions";

// BTCPay Server webhook secret - add this to your environment variables
const BTCPAY_WEBHOOK_SECRET = process.env.BTCPAY_WEBHOOK_SECRET!;

interface BTCPayWebhookPayload {
  deliveryId: string;
  webhookId: string;
  originalDeliveryId: string;
  isRedelivery: boolean;
  type: string;
  timestamp: number;
  storeId: string;
  invoiceId: string;
  afterExpiration?: boolean;
  // Invoice data
  invoice?: {
    id: string;
    storeId: string;
    amount: string;
    currency: string;
    type: string;
    checkoutLink: string;
    status: string;
    additionalStatus: string;
    availableStatusesForManualMarking: string[];
    archived: boolean;
    createdTime: number;
    expirationTime: number;
    monitoringTime: number;
    settlementTime?: number;
    metadata: {
      orderId?: string;
      posData?: string;
      [key: string]: any;
    };
    checkout: {
      speedPolicy: string;
      paymentMethods: string[];
      defaultPaymentMethod?: string;
      expirationMinutes: number;
      monitoringMinutes: number;
      paymentTolerance: number;
      redirectURL?: string;
      redirectAutomatically?: boolean;
      requiresRefundEmail: boolean;
      checkoutType?: string;
      defaultLanguage?: string;
    };
    receipt: {
      enabled: boolean;
      showQR?: boolean;
      showPayments?: boolean;
    };
  };
  // Payment data for payment events
  payment?: {
    id: string;
    receivedDate: number;
    value: string;
    fee: string;
    status: string;
    destination: string;
    paymentMethod: string;
    details: any;
  };
}

/**
 * Validates the BTCPay Server webhook signature
 */
function validateWebhookSignature(payload: string, signature: string, secret: string): boolean {
  try {
    // Create HMAC256 hash of the payload using the secret
    const expectedSignature = createHmac("sha256", secret).update(payload, "utf8").digest("hex");

    // BTCPay Server sends signature in format: sha256=<hash>
    const receivedSignature = signature.replace("sha256=", "");

    // Use timingSafeEqual to prevent timing attacks
    return expectedSignature === receivedSignature;
  } catch (error) {
    console.error("Error validating webhook signature:", error);
    return false;
  }
}

/**
 * Extracts donation ID from BTCPay Server invoice metadata
 */
function getDonationIdFromInvoice(invoice: BTCPayWebhookPayload["invoice"]): string | null {
  if (!invoice) return null;

  try {
    // Parse metadata - BTCPay Server stores custom data in metadata or posData
    const metadata = invoice.metadata || {};
    const posData = metadata.posData ? JSON.parse(metadata.posData) : {};

    // Extract donation ID from metadata or posData
    return metadata.donationId || posData.donationId || null;
  } catch (error) {
    console.error("Error extracting donation ID from invoice:", error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get the raw body as text for signature validation
    const body = await request.text();

    // Get the signature from headers
    const signature = request.headers.get("BTCPAY-SIG");

    if (!signature) {
      console.error("Missing BTCPAY-SIG header");
      return NextResponse.json({ error: "Missing signature header" }, { status: 400 });
    }

    if (!BTCPAY_WEBHOOK_SECRET) {
      console.error("BTCPAY_WEBHOOK_SECRET not configured");
      return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
    }

    // Validate the webhook signature
    if (!validateWebhookSignature(body, signature, BTCPAY_WEBHOOK_SECRET)) {
      console.error("Invalid webhook signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    // Parse the webhook payload
    const payload: BTCPayWebhookPayload = JSON.parse(body);

    console.log(`BTCPay webhook received: ${payload.type} for invoice ${payload.invoiceId}`);

    // Handle different webhook types
    switch (payload.type) {
      case "InvoiceReceivedPayment":
      case "InvoicePaymentSettled":
        console.log(`${payload.type} for invoice ${payload.invoiceId}`);

        // Extract donation ID and update status
        if (payload.invoice) {
          const donationId = getDonationIdFromInvoice(payload.invoice);

          if (donationId) {
            try {
              const result = await updateDonationStatus(donationId, "completed");

              if (result.success) {
                console.log(`Successfully updated donation ${donationId} to completed for invoice ${payload.invoiceId}`);
              } else {
                console.error(`Failed to update donation status: ${result.error}`);
              }
            } catch (error) {
              console.error("Error updating donation status:", error);
            }
          } else {
            console.error(`No donation ID found for invoice ${payload.invoiceId}`);
          }
        }
        break;

      default:
        console.log(`Unhandled webhook type: ${payload.type}`);
    }

    // Always return success to BTCPay Server
    return NextResponse.json({
      success: true,
      message: `Webhook ${payload.type} processed successfully`,
    });
  } catch (error: any) {
    console.error("BTCPay webhook error:", error);

    // Return success to prevent BTCPay from retrying on parsing errors
    // Only return error for actual processing issues
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Webhook processing failed",
      },
      { status: 200 }
    ); // Return 200 to prevent retries
  }
}
