import Stripe from "stripe";
import { STS_SECRET_KEY } from "@/config";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(STS_SECRET_KEY);

export async function POST(request: NextRequest) {
  try {
    const { amount, taxDeductible, donorName, donorEmail, donationId } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Valid amount is required" }, { status: 400 });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "us_bank_account"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: amount * 100, // We multiply by 100 because Stripe expects amount in cents
            product_data: {
              name: "Donation to Waye",
              description: "Supporting decentralized technologies and open-source contributors",
            },
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://waye.dev"}/gracias?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://waye.dev"}/donation-cancelled?session_id={CHECKOUT_SESSION_ID}`,

      // Enable automatic tax calculation if tax deductible
      ...(taxDeductible === "yes" && {
        automatic_tax: {
          enabled: true,
        },
        tax_id_collection: {
          enabled: true,
        },
      }),

      // Add customer information if provided
      ...(donorEmail && {
        customer_email: donorEmail,
      }),

      // Add metadata for tracking
      metadata: {
        taxDeductible: taxDeductible || "no",
        donorName: donorName || "",
        donorEmail: donorEmail || "",
        paymentMethod: "stripe",
        donationId: donationId || "", // Include donation ID for webhook tracking
      },

      // Configure for tax-deductible donations
      ...(taxDeductible === "yes" && {
        invoice_creation: {
          enabled: true,
          invoice_data: {
            description: "Tax-deductible donation to Waye (501c3)",
            metadata: {
              taxDeductible: "yes",
              donorName: donorName || "",
            },
          },
        },
      }),
    });

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      url: session.url,
    });
  } catch (error: any) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: error.message || "Failed to create checkout session" }, { status: 500 });
  }
}
