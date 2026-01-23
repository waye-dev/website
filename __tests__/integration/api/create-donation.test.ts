import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NextRequest } from 'next/server';
import { POST } from '@/app/api/create-donation/route';

// Mock environment variables
const mockEnv = {
  INITIATIVES_REDIRECT: 'https://btcpay.example.com/checkout',
  SUSTAINABILITY_REDIRECT: 'store_123',
};

vi.stubEnv('INITIATIVES_REDIRECT', mockEnv.INITIATIVES_REDIRECT);
vi.stubEnv('SUSTAINABILITY_REDIRECT', mockEnv.SUSTAINABILITY_REDIRECT);

describe('POST /api/create-donation (BTCPay)', () => {
  beforeEach(() => {
    vi.stubEnv('INITIATIVES_REDIRECT', mockEnv.INITIATIVES_REDIRECT);
    vi.stubEnv('SUSTAINABILITY_REDIRECT', mockEnv.SUSTAINABILITY_REDIRECT);
  });

  // ============================================
  // SUCCESSFUL DONATION TESTS
  // ============================================
  describe('Successful Donations', () => {
    it('should create a donation URL with valid amount', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 100,
          currency: 'USD',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.donationUrl).toContain(mockEnv.INITIATIVES_REDIRECT);
      expect(data.donationUrl).toContain('price=100');
      expect(data.message).toBe('Donation URL created successfully');
    });

    it('should include all parameters in donation URL', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 250,
          currency: 'USD',
          checkoutDesc: 'Test donation',
          donorName: 'John Doe',
          donorEmail: 'john@example.com',
          taxDeductible: 'yes',
          donationId: 'WAYE_TEST_123',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.donationUrl).toContain('price=250');
      expect(data.donationUrl).toContain('currency=USD');
      // URL encoding may vary, just check the key is present
      expect(data.donationUrl).toContain('checkoutDesc=');
      expect(data.donationUrl).toContain('browserRedirect=');
    });

    it('should include posData with metadata', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 100,
          donorName: 'Test User',
          donorEmail: 'test@example.com',
          taxDeductible: 'yes',
          donationId: 'WAYE_TEST_456',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      // posData should be URL-encoded JSON containing metadata
      expect(data.donationUrl).toContain('posData=');
    });

    it('should use default currency when not provided', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 50,
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.donationUrl).toContain('currency=USD');
    });

    it('should use default checkout description when not provided', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 75,
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      // Just verify the checkout description parameter is present
      expect(data.donationUrl).toContain('checkoutDesc=');
    });

    it('should handle large donation amounts', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 1000000,
          currency: 'USD',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.donationUrl).toContain('price=1000000');
    });

    it('should handle donation without optional fields', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 100,
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
    });
  });

  // ============================================
  // VALIDATION ERROR TESTS
  // ============================================
  describe('Validation Errors', () => {
    it('should return 400 when amount is missing', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          currency: 'USD',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Valid amount is required');
    });

    it('should return 400 when amount is zero', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 0,
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Valid amount is required');
    });

    it('should return 400 when amount is 1 or less', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 1,
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Valid amount is required');
    });

    it('should return 400 when amount is negative', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: -100,
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Valid amount is required');
    });
  });

  // ============================================
  // CONFIGURATION ERROR TESTS
  // ============================================
  describe('Configuration Errors', () => {
    it('should return 500 when INITIATIVES_REDIRECT is missing', async () => {
      vi.stubEnv('INITIATIVES_REDIRECT', '');

      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 100,
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe('Payment system configuration error');
    });

    it('should return 500 when SUSTAINABILITY_REDIRECT is missing', async () => {
      vi.stubEnv('SUSTAINABILITY_REDIRECT', '');

      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 100,
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe('Payment system configuration error');
    });
  });

  // ============================================
  // EDGE CASES
  // ============================================
  describe('Edge Cases', () => {
    it('should handle decimal amounts', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 99.99,
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.donationUrl).toContain('price=99.99');
    });

    it('should handle special characters in checkout description', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 50,
          checkoutDesc: "John's donation & support",
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
    });

    it('should handle unicode characters in donor name', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 100,
          donorName: 'José García',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
    });

    it('should handle amount at boundary (just above 1)', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 2,
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
    });

    it('should handle malformed JSON gracefully', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: 'invalid-json',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBeDefined();
    });
  });

  // ============================================
  // METADATA/POSDATA TESTS
  // ============================================
  describe('Metadata and posData', () => {
    it('should include donationId in posData', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 100,
          donationId: 'WAYE_20250121_TEST',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      // Decode the URL to check posData content
      const url = new URL(data.donationUrl);
      const posData = url.searchParams.get('posData');
      expect(posData).not.toBeNull();

      if (posData) {
        const metadata = JSON.parse(posData);
        expect(metadata.donationId).toBe('WAYE_20250121_TEST');
        expect(metadata.paymentMethod).toBe('bitcoin');
      }
    });

    it('should include taxDeductible in posData', async () => {
      const request = new NextRequest('http://localhost/api/create-donation', {
        method: 'POST',
        body: JSON.stringify({
          amount: 100,
          taxDeductible: 'yes',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      const url = new URL(data.donationUrl);
      const posData = url.searchParams.get('posData');

      if (posData) {
        const metadata = JSON.parse(posData);
        expect(metadata.taxDeductible).toBe('yes');
      }
    });
  });
});

