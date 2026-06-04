import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NextRequest } from 'next/server';

// Mock Stripe as a class constructor
const mockStripeSession = {
  id: 'cs_test_123456',
  url: 'https://checkout.stripe.com/pay/cs_test_123456',
};

const mockCreate = vi.fn().mockResolvedValue(mockStripeSession);

vi.mock('stripe', () => {
  return {
    default: class MockStripe {
      checkout = {
        sessions: {
          create: mockCreate,
        },
      };
    },
  };
});

// Now import the route after mocking
import { POST } from '@/app/api/create-stripe-checkout/route';

describe('POST /api/create-stripe-checkout', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockCreate.mockResolvedValue(mockStripeSession);
  });

  // ============================================
  // SUCCESSFUL CHECKOUT TESTS
  // ============================================
  describe('Successful Checkout Creation', () => {
    it('should create a checkout session with valid amount', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
          }),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.sessionId).toBe('cs_test_123456');
      expect(data.url).toBe('https://checkout.stripe.com/pay/cs_test_123456');
    });

    it('should call Stripe with correct amount in cents', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
          }),
        }
      );

      await POST(request);

      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          line_items: expect.arrayContaining([
            expect.objectContaining({
              price_data: expect.objectContaining({
                unit_amount: 10000, // 100 * 100
              }),
            }),
          ]),
        })
      );
    });

    it('should include payment method types', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 50,
          }),
        }
      );

      await POST(request);

      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          payment_method_types: ['card', 'us_bank_account'],
        })
      );
    });

    it('should set correct success and cancel URLs', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
          }),
        }
      );

      await POST(request);

      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          success_url: expect.stringContaining('/gracias'),
          cancel_url: expect.stringContaining('/donation-cancelled'),
        })
      );
    });

    it('should include donor email when provided', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
            donorEmail: 'test@example.com',
          }),
        }
      );

      await POST(request);

      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          customer_email: 'test@example.com',
        })
      );
    });

    it('should include metadata with donation info', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
            donorName: 'John Doe',
            donorEmail: 'john@example.com',
            taxDeductible: 'yes',
            donationId: 'WAYE_TEST_123',
          }),
        }
      );

      await POST(request);

      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          metadata: {
            taxDeductible: 'yes',
            donorName: 'John Doe',
            donorEmail: 'john@example.com',
            paymentMethod: 'stripe',
            donationId: 'WAYE_TEST_123',
          },
        })
      );
    });
  });

  // ============================================
  // TAX DEDUCTIBLE DONATION TESTS
  // ============================================
  describe('Tax Deductible Donations', () => {
    it('should enable automatic tax for tax deductible donations', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
            taxDeductible: 'yes',
          }),
        }
      );

      await POST(request);

      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          automatic_tax: {
            enabled: true,
          },
          tax_id_collection: {
            enabled: true,
          },
        })
      );
    });

    it('should enable invoice creation for tax deductible donations', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
            taxDeductible: 'yes',
            donorName: 'John Doe',
          }),
        }
      );

      await POST(request);

      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          invoice_creation: expect.objectContaining({
            enabled: true,
            invoice_data: expect.objectContaining({
              description: 'Tax-deductible donation to Waye (501c3)',
            }),
          }),
        })
      );
    });

    it('should not enable tax features for non-tax deductible donations', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
            taxDeductible: 'no',
          }),
        }
      );

      await POST(request);

      // Check that automatic_tax is not included in the call
      const callArgs = mockCreate.mock.calls[0][0];
      expect(callArgs.automatic_tax).toBeUndefined();
    });
  });

  // ============================================
  // VALIDATION ERROR TESTS
  // ============================================
  describe('Validation Errors', () => {
    it('should return 400 when amount is missing', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({}),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Valid amount is required');
    });

    it('should return 400 when amount is zero', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 0,
          }),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Valid amount is required');
    });

    it('should return 400 when amount is negative', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: -100,
          }),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Valid amount is required');
    });
  });

  // ============================================
  // STRIPE ERROR HANDLING TESTS
  // ============================================
  describe('Stripe Error Handling', () => {
    it('should handle Stripe API errors', async () => {
      mockCreate.mockRejectedValueOnce(new Error('Stripe API error'));

      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
          }),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe('Stripe API error');
    });

    it('should handle generic Stripe errors', async () => {
      mockCreate.mockRejectedValueOnce({
        message: 'Card declined',
        type: 'card_error',
      });

      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
          }),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe('Card declined');
    });

    it('should handle unknown errors gracefully', async () => {
      mockCreate.mockRejectedValueOnce({});

      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
          }),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe('Failed to create checkout session');
    });
  });

  // ============================================
  // EDGE CASES
  // ============================================
  describe('Edge Cases', () => {
    it('should handle very large amounts', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 1000000,
          }),
        }
      );

      const response = await POST(request);
      
      expect(response.status).toBe(200);
      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          line_items: expect.arrayContaining([
            expect.objectContaining({
              price_data: expect.objectContaining({
                unit_amount: 100000000, // 1000000 * 100
              }),
            }),
          ]),
        })
      );
    });

    it('should handle minimum valid amount', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 1,
          }),
        }
      );

      const response = await POST(request);
      
      expect(response.status).toBe(200);
      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          line_items: expect.arrayContaining([
            expect.objectContaining({
              price_data: expect.objectContaining({
                unit_amount: 100, // 1 * 100
              }),
            }),
          ]),
        })
      );
    });

    it('should handle missing optional fields gracefully', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
          }),
        }
      );

      await POST(request);

      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          metadata: expect.objectContaining({
            donorName: '',
            donorEmail: '',
            donationId: '',
          }),
        })
      );
    });

    it('should include correct product information', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
          }),
        }
      );

      await POST(request);

      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          line_items: expect.arrayContaining([
            expect.objectContaining({
              price_data: expect.objectContaining({
                product_data: {
                  name: 'Donation to Waye',
                  description:
                    'Supporting decentralized technologies and open-source contributors',
                },
              }),
              quantity: 1,
            }),
          ]),
          mode: 'payment',
        })
      );
    });
  });

  // ============================================
  // SESSION URL TESTS
  // ============================================
  describe('Session URL Handling', () => {
    it('should include session_id placeholder in success URL', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
          }),
        }
      );

      await POST(request);

      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          success_url: expect.stringContaining('{CHECKOUT_SESSION_ID}'),
        })
      );
    });

    it('should include session_id placeholder in cancel URL', async () => {
      const request = new NextRequest(
        'http://localhost/api/create-stripe-checkout',
        {
          method: 'POST',
          body: JSON.stringify({
            amount: 100,
          }),
        }
      );

      await POST(request);

      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          cancel_url: expect.stringContaining('{CHECKOUT_SESSION_ID}'),
        })
      );
    });
  });
});
