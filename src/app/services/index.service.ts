import { DONATION_DESCRIPTIONS } from '@/utils';
import { NEXT_PUBLIC_SERVER_BASE_URL } from '@/config';

export interface CreateDonationRequest {
  name?: string;
  email?: string;
  amountUsd: number;
  donationId: string;
  isTaxDeductible: boolean;
  paymentMethod: PaymentMethod;
}

export enum PaymentMethod {
  BITCOIN = 'bitcoin',
  FIAT = 'fiat',
}

export const DonationService = {
  createRecord: async (donation: CreateDonationRequest) => {
    try {
      const url = `${NEXT_PUBLIC_SERVER_BASE_URL}/api/donations`;

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(donation),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to create donation record: ${response.statusText}`
        );
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  generateId(data: Pick<CreateDonationRequest, 'amountUsd' | 'paymentMethod'>) {
    // Create unique ID combining timestamp, payment method, and amount
    const timestamp = Date.now();
    const method = data.paymentMethod;
    const amount = data.amountUsd;

    // Format: WAYE_YYYYMMDD_METHOD_AMOUNT_RANDOM
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();

    return `WAYE_${date}_${timestamp}_${method.toUpperCase()}_${amount}_${random}`;
  },

  getRandomDonationDescription() {
    const randomIndex = Math.floor(
      Math.random() * DONATION_DESCRIPTIONS.length
    );
    return DONATION_DESCRIPTIONS[randomIndex];
  },
};
