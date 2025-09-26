import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const initRedirect = process.env.NEXT_PUBLIC_INITIATIVES_REDIRECT;
    const redirectKey = process.env.NEXT_PUBLIC_SUSTAINABILITY_REDIRECT;

    const { amount, currency = "USD", checkoutDesc = "donation to waye" } = await request.json();

    if (!amount || amount <= 1) {
      return NextResponse.json({ error: "Valid amount is required" }, { status: 400 });
    }

    if (!initRedirect || !redirectKey) {
      return NextResponse.json({ error: "Payment system configuration error" }, { status: 500 });
    }

    const params = {
      storeId: redirectKey,
      price: amount.toString(),
      currency,
      checkoutDesc,
      browserRedirect: "https://www.waye.dev/gracias",
    };

    const queryParams = new URLSearchParams(params);
    const donationUrl = `${initRedirect}?${queryParams.toString()}`;

    return NextResponse.json({
      success: true,
      donationUrl,
      message: "Donation URL created successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to create donation" }, { status: 500 });
  }
}
