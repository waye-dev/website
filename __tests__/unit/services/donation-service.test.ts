import { describe, it, expect, vi, beforeEach, afterEach, beforeAll, afterAll } from 'vitest';
import {
  DonationService,
  PaymentMethod,
  CreateDonationRequest,
} from '@/app/services/index.service';
import { DONATION_DESCRIPTIONS } from '@/utils';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

// Mock the config module
vi.mock('@/config', () => ({
  NEXT_PUBLIC_SERVER_BASE_URL: 'http://mock-server.test',
}));

// Setup MSW server for this test file
const server = setupServer(
  http.post('http://mock-server.test/api/donations', async ({ request }) => {
    const body = (await request.json()) as CreateDonationRequest;

    if (!body.donationId || body.amountUsd === undefined) {
      return HttpResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    return HttpResponse.json({
      success: true,
      data: {
        id: body.donationId,
        name: body.name || '',
        email: body.email || '',
        amountUsd: body.amountUsd,
        isTaxDeductible: body.isTaxDeductible,
        paymentMethod: body.paymentMethod,
        status: 'pending',
        createdAt: new Date().toISOString(),
      },
    });
  })
);

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('DonationService', () => {
  // ============================================
  // generateId TESTS
  // ============================================
  describe('generateId', () => {
    beforeEach(() => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date('2025-01-21T10:30:00Z'));
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should generate an ID with correct format prefix', () => {
      const id = DonationService.generateId({
        amountUsd: 100,
        paymentMethod: PaymentMethod.BITCOIN,
      });

      expect(id).toMatch(/^WAYE_/);
    });

    it('should include date in YYYYMMDD format', () => {
      const id = DonationService.generateId({
        amountUsd: 100,
        paymentMethod: PaymentMethod.BITCOIN,
      });

      expect(id).toContain('20250121');
    });

    it('should include uppercase payment method', () => {
      const bitcoinId = DonationService.generateId({
        amountUsd: 100,
        paymentMethod: PaymentMethod.BITCOIN,
      });

      expect(bitcoinId).toContain('_BITCOIN_');

      const fiatId = DonationService.generateId({
        amountUsd: 100,
        paymentMethod: PaymentMethod.FIAT,
      });

      expect(fiatId).toContain('_FIAT_');
    });

    it('should include the amount in the ID', () => {
      const id = DonationService.generateId({
        amountUsd: 250,
        paymentMethod: PaymentMethod.BITCOIN,
      });

      expect(id).toContain('_250_');
    });

    it('should generate unique IDs for same inputs', () => {
      const id1 = DonationService.generateId({
        amountUsd: 100,
        paymentMethod: PaymentMethod.BITCOIN,
      });

      // Advance time slightly
      vi.advanceTimersByTime(1);

      const id2 = DonationService.generateId({
        amountUsd: 100,
        paymentMethod: PaymentMethod.BITCOIN,
      });

      expect(id1).not.toBe(id2);
    });

    it('should include random suffix', () => {
      const id = DonationService.generateId({
        amountUsd: 100,
        paymentMethod: PaymentMethod.BITCOIN,
      });

      // The ID should end with a random alphanumeric string
      const parts = id.split('_');
      const randomPart = parts[parts.length - 1];
      expect(randomPart).toMatch(/^[A-Z0-9]+$/);
    });

    it('should handle zero amount', () => {
      const id = DonationService.generateId({
        amountUsd: 0,
        paymentMethod: PaymentMethod.BITCOIN,
      });

      expect(id).toContain('_0_');
    });

    it('should handle large amounts', () => {
      const id = DonationService.generateId({
        amountUsd: 1000000,
        paymentMethod: PaymentMethod.FIAT,
      });

      expect(id).toContain('_1000000_');
    });

    it('should handle decimal amounts (truncated in ID)', () => {
      const id = DonationService.generateId({
        amountUsd: 99.99,
        paymentMethod: PaymentMethod.BITCOIN,
      });

      expect(id).toContain('_99.99_');
    });
  });

  // ============================================
  // getRandomDonationDescription TESTS
  // ============================================
  describe('getRandomDonationDescription', () => {
    it('should return a string', () => {
      const description = DonationService.getRandomDonationDescription();
      expect(typeof description).toBe('string');
    });

    it('should return a description from the DONATION_DESCRIPTIONS array', () => {
      const description = DonationService.getRandomDonationDescription();
      expect(DONATION_DESCRIPTIONS).toContain(description);
    });

    it('should return non-empty description', () => {
      const description = DonationService.getRandomDonationDescription();
      expect(description.length).toBeGreaterThan(0);
    });

    it('should return random descriptions over multiple calls', () => {
      const descriptions = new Set<string>();
      
      // Call multiple times to increase chance of getting different values
      for (let i = 0; i < 100; i++) {
        descriptions.add(DonationService.getRandomDonationDescription());
      }

      // Should have gotten at least a few different descriptions
      expect(descriptions.size).toBeGreaterThan(1);
    });

    it('should work with mocked Math.random', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0);
      const firstDescription = DonationService.getRandomDonationDescription();
      expect(firstDescription).toBe(DONATION_DESCRIPTIONS[0]);

      vi.spyOn(Math, 'random').mockReturnValue(0.99);
      const lastDescription = DonationService.getRandomDonationDescription();
      expect(lastDescription).toBe(
        DONATION_DESCRIPTIONS[DONATION_DESCRIPTIONS.length - 1]
      );

      vi.restoreAllMocks();
    });
  });

  // ============================================
  // createRecord TESTS
  // ============================================
  describe('createRecord', () => {
    const validDonation: CreateDonationRequest = {
      name: 'John Doe',
      email: 'john@example.com',
      amountUsd: 100,
      donationId: 'WAYE_20250121_TEST123',
      isTaxDeductible: true,
      paymentMethod: PaymentMethod.BITCOIN,
    };

    it('should successfully create a donation record', async () => {
      const result = await DonationService.createRecord(validDonation);

      expect(result).toHaveProperty('success', true);
      expect(result).toHaveProperty('data');
    });

    it('should handle donation without optional name', async () => {
      const donationWithoutName: CreateDonationRequest = {
        email: 'anonymous@example.com',
        amountUsd: 50,
        donationId: 'WAYE_20250121_TEST456',
        isTaxDeductible: false,
        paymentMethod: PaymentMethod.BITCOIN,
      };

      const result = await DonationService.createRecord(donationWithoutName);
      expect(result.success).toBe(true);
    });

    it('should handle donation without optional email', async () => {
      const donationWithoutEmail: CreateDonationRequest = {
        name: 'Anonymous Donor',
        amountUsd: 50,
        donationId: 'WAYE_20250121_TEST789',
        isTaxDeductible: false,
        paymentMethod: PaymentMethod.FIAT,
      };

      const result = await DonationService.createRecord(donationWithoutEmail);
      expect(result.success).toBe(true);
    });

    it('should handle fiat payment method', async () => {
      const fiatDonation: CreateDonationRequest = {
        name: 'Fiat Donor',
        email: 'fiat@example.com',
        amountUsd: 200,
        donationId: 'WAYE_20250121_FIAT123',
        isTaxDeductible: true,
        paymentMethod: PaymentMethod.FIAT,
      };

      const result = await DonationService.createRecord(fiatDonation);
      expect(result.success).toBe(true);
    });

    it('should throw error on server failure', async () => {
      server.use(
        http.post('http://mock-server.test/api/donations', () => {
          return HttpResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
          );
        })
      );

      await expect(DonationService.createRecord(validDonation)).rejects.toThrow(
        'Failed to create donation record'
      );
    });

    it('should throw error on network failure', async () => {
      server.use(
        http.post('http://mock-server.test/api/donations', () => {
          return HttpResponse.error();
        })
      );

      await expect(DonationService.createRecord(validDonation)).rejects.toThrow();
    });

    it('should throw error on 400 response', async () => {
      server.use(
        http.post('http://mock-server.test/api/donations', () => {
          return HttpResponse.json(
            { error: 'Bad Request' },
            { status: 400 }
          );
        })
      );

      await expect(DonationService.createRecord(validDonation)).rejects.toThrow(
        'Failed to create donation record'
      );
    });

    it('should handle large donation amounts', async () => {
      const largeDonation: CreateDonationRequest = {
        name: 'Whale Donor',
        email: 'whale@example.com',
        amountUsd: 1000000,
        donationId: 'WAYE_20250121_WHALE',
        isTaxDeductible: true,
        paymentMethod: PaymentMethod.BITCOIN,
      };

      const result = await DonationService.createRecord(largeDonation);
      expect(result.success).toBe(true);
    });

    it('should handle minimum donation amount', async () => {
      const minDonation: CreateDonationRequest = {
        amountUsd: 1,
        donationId: 'WAYE_20250121_MIN',
        isTaxDeductible: false,
        paymentMethod: PaymentMethod.FIAT,
      };

      const result = await DonationService.createRecord(minDonation);
      expect(result.success).toBe(true);
    });
  });

  // ============================================
  // PaymentMethod ENUM TESTS
  // ============================================
  describe('PaymentMethod enum', () => {
    it('should have BITCOIN value', () => {
      expect(PaymentMethod.BITCOIN).toBe('bitcoin');
    });

    it('should have FIAT value', () => {
      expect(PaymentMethod.FIAT).toBe('fiat');
    });

    it('should have only two payment methods', () => {
      const values = Object.values(PaymentMethod);
      expect(values).toHaveLength(2);
      expect(values).toContain('bitcoin');
      expect(values).toContain('fiat');
    });
  });
});
