"use server";

type DonationData = {
  name: string;
  email: string;
  amount: number;
  taxDeductible: "yes" | "no";
  paymentMethod: "bitcoin" | "fiat";
};

export async function submitDonationData(body: DonationData) {
  const url = process.env.DONATION_APP_SCRIPT_URL;

  if (!url) {
    throw new Error("Donation URL is not defined in environment variables");
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const result = await response.text();

    // Apps Script returns text, so we need to parse it
    let jsonResult;
    try {
      jsonResult = JSON.parse(result);
    } catch (parseError) {
      throw new Error(`Invalid response format: ${result}`);
    }

    if (!response.ok || !jsonResult.success) {
      throw new Error(jsonResult.error || `Google Script API error: ${response.statusText}`);
    }

    return { success: true, data: jsonResult };
  } catch (err: any) {
    console.error("Donation submission error:", err);
    return { success: false, error: err.message };
  }
}
