import Stripe from "stripe";
import { STS_SECRET_KEY } from "@/config";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(STS_SECRET_KEY);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Session ID is required" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({
      success: true,
      session: {
        id: session.id,
        payment_status: session.payment_status,
        amount_total: session.amount_total,
        currency: session.currency,
        customer_email: session.customer_email,
        metadata: session.metadata,
      },
    });
  } catch (error: any) {
    console.error("Error retrieving session:", error);
    return NextResponse.json({ error: error.message || "Failed to retrieve session" }, { status: 500 });
  }
}
