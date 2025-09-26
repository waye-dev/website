import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const btcPayEndpoint = process.env.NEXT_PUBLIC_BTC_PAY_ENDPOINT;
    const btcPayStoreId = process.env.NEXT_PUBLIC_BTC_PAY_STORE_ID;

    const { amount, currency = "USD", checkoutDesc = "donation to waye" } = await request.json();

    if (!amount || amount <= 1) {
      return NextResponse.json({ error: "Valid amount is required" }, { status: 400 });
    }

    if (!btcPayEndpoint || !btcPayStoreId) {
      return NextResponse.json({ error: "Payment system configuration error" }, { status: 500 });
    }

    const params = {
      storeId: btcPayStoreId,
      price: amount.toString(),
      currency,
      checkoutDesc,
      browserRedirect: `${process.env.NEXT_PUBLIC_BASE_URL || "https://www.waye.dev"}/gracias`,
    };

    const queryParams = new URLSearchParams(params);
    const donationUrl = `${btcPayEndpoint}?${queryParams.toString()}`;

    return NextResponse.json({
      success: true,
      donationUrl,
      message: "Donation URL created successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to create donation" }, { status: 500 });
  }
}
