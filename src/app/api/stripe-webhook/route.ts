import Stripe from "stripe";
import { STS_SECRET_KEY } from "@/config";
import { NextRequest, NextResponse } from "next/server";
import { updateDonationStatus } from "@/app/components/donation-modal/action";

const stripe = new Stripe(STS_SECRET_KEY);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// Helper function to extract donation ID from session metadata
async function getDonationIdFromSession(sessionId: string): Promise<string | null> {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session.metadata?.donationId || null;
  } catch (error) {
    console.error("Error retrieving session:", error);
    return null;
  }
}

// Helper function to get donation ID from payment intent
async function getDonationIdFromPaymentIntent(paymentIntentId: string): Promise<string | null> {
  try {
    // Find the session associated with this payment intent
    const sessions = await stripe.checkout.sessions.list({
      payment_intent: paymentIntentId,
      limit: 1,
    });

    if (sessions.data.length > 0) {
      const session = sessions.data[0];
      return session.metadata?.donationId || null;
    }
    return null;
  } catch (error) {
    console.error("Error finding session for payment intent:", error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  console.log(`Received webhook: ${event.type}`);

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session;

      try {
        const donationId = await getDonationIdFromSession(session.id);

        if (!donationId) {
          console.error(`No donation ID found for session: ${session.id}`);
          break;
        }

        // For card payments, payment is complete immediately
        // For ACH payments, this just means the session is complete but payment is still processing
        const paymentIntent = session.payment_intent as string;

        if (paymentIntent) {
          // Retrieve payment intent to check payment method
          const pi = await stripe.paymentIntents.retrieve(paymentIntent);
          const paymentMethod = pi.payment_method;

          if (paymentMethod) {
            const pm = await stripe.paymentMethods.retrieve(paymentMethod as string);

            // Handle based on payment method type
            if (pm.type === "card" || pm.type === "link") {
              // Card and Link payments are processed immediately
              console.log(`Processing immediate payment: ${pm.type} for donation ${donationId}`);

              const result = await updateDonationStatus(donationId, "completed");
              if (result.success) {
                console.log(`${pm.type} donation completed successfully: ${donationId}`);
              } else {
                console.error(`Failed to update donation status: ${result.error}`);
              }
            } else if (pm.type === "us_bank_account") {
              // ACH payments - status remains pending, wait for payment_intent.succeeded
              console.log(`ACH payment session completed: ${session.id} - donation ${donationId} remains pending`);
            }
          }
        }
      } catch (error) {
        console.error("Error processing checkout.session.completed:", error);
      }
      break;

    case "payment_intent.succeeded":
      const paymentIntent = event.data.object as Stripe.PaymentIntent;

      try {
        const donationId = await getDonationIdFromPaymentIntent(paymentIntent.id);

        if (!donationId) {
          console.error(`No donation ID found for payment intent: ${paymentIntent.id}`);
          break;
        }

        // This event fires when payment is actually completed (important for ACH)
        const paymentMethod = paymentIntent.payment_method;

        if (paymentMethod) {
          const pm = await stripe.paymentMethods.retrieve(paymentMethod as string);

          console.log(`Payment succeeded: ${paymentIntent.id}, method: ${pm.type}, donation: ${donationId}`);

          // Update donation status to completed
          const result = await updateDonationStatus(donationId, "completed");
          if (result.success) {
            console.log(`Donation ${donationId} marked as completed`);
          } else {
            console.error(`Failed to update donation status: ${result.error}`);
          }
        }
      } catch (error) {
        console.error("Error processing payment_intent.succeeded:", error);
      }
      break;

    case "payment_intent.payment_failed":
      const failedPayment = event.data.object as Stripe.PaymentIntent;

      try {
        const donationId = await getDonationIdFromPaymentIntent(failedPayment.id);

        if (!donationId) {
          console.error(`No donation ID found for failed payment: ${failedPayment.id}`);
          break;
        }

        console.log(`Payment failed: ${failedPayment.id}, donation: ${donationId}`);

        // Update donation status to failed
        const result = await updateDonationStatus(donationId, "failed");
        if (result.success) {
          console.log(`Donation ${donationId} marked as failed`);
        } else {
          console.error(`Failed to update donation status: ${result.error}`);
        }
      } catch (error) {
        console.error("Error processing payment failure:", error);
      }
      break;

    case "payment_method.attached":
      // This can fire for Link payments when user saves payment method
      console.log("Payment method attached (possibly Link)");
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
