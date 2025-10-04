"use server";

type DonationData = {
  name: string;
  email: string;
  amount: number;
  taxDeductible: "yes" | "no";
  paymentMethod: "bitcoin" | "fiat";
  status: "pending" | "completed" | "failed";
  stripePaymentMethod?: string;
  sessionId?: string;
  invoiceId?: string;
  donationId?: string; // For updates
  action?: "create" | "update_status"; // To differentiate operations
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
    return { success: false, error: err.message };
  }
}

// Helper function to update donation status
export async function updateDonationStatus(donationId: string, status: "completed" | "failed") {
  return submitDonationData({
    action: "update_status",
    donationId,
    status,
    // Required fields (won't be used for updates)
    name: "",
    email: "",
    amount: 0,
    taxDeductible: "no",
    paymentMethod: "fiat",
  });
}
