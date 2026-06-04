import { http, HttpResponse } from 'msw';

const MOCK_SERVER_BASE_URL = 'http://mock-server.test';

export const handlers = [
  // Mock donation record creation (external API)
  http.post(`${MOCK_SERVER_BASE_URL}/api/donations`, async ({ request }) => {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      amountUsd: number;
      donationId: string;
      isTaxDeductible: boolean;
      paymentMethod: string;
    };

    // Validate required fields
    if (!body.donationId || body.amountUsd === undefined) {
      return HttpResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Simulate successful record creation
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
  }),

  // Mock BTCPay donation creation
  http.post('/api/create-donation', async ({ request }) => {
    const body = (await request.json()) as {
      amount: number;
      currency?: string;
      checkoutDesc?: string;
      donorName?: string;
      donorEmail?: string;
      taxDeductible?: string;
      donationId?: string;
    };

    // Validate amount
    if (!body.amount || body.amount <= 1) {
      return HttpResponse.json(
        { error: 'Valid amount is required' },
        { status: 400 }
      );
    }

    // Simulate successful BTCPay invoice creation
    return HttpResponse.json({
      success: true,
      donationUrl: `https://btcpay.example.com/invoice?amount=${body.amount}`,
      message: 'Donation URL created successfully',
    });
  }),

  // Mock Stripe checkout session creation
  http.post('/api/create-stripe-checkout', async ({ request }) => {
    const body = (await request.json()) as {
      amount: number;
      taxDeductible?: string;
      donorName?: string;
      donorEmail?: string;
      donationId?: string;
    };

    // Validate amount
    if (!body.amount || body.amount <= 0) {
      return HttpResponse.json(
        { error: 'Valid amount is required' },
        { status: 400 }
      );
    }

    // Simulate successful Stripe session creation
    return HttpResponse.json({
      success: true,
      sessionId: `cs_test_${Date.now()}`,
      url: `https://checkout.stripe.com/pay/cs_test_${Date.now()}`,
    });
  }),

  // Mock newsletter subscription
  http.post('/subscribe-newsletter', async ({ request }) => {
    const body = (await request.json()) as {
      email?: string;
      name?: string;
    };

    // Validate required fields
    if (!body.email || !body.name) {
      return HttpResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      );
    }

    // Simulate already subscribed
    if (body.email === 'existing@test.com') {
      return HttpResponse.json(
        {
          title: 'Member Exists',
          detail: 'This email is already subscribed',
        },
        { status: 400 }
      );
    }

    // Simulate invalid email (Mailchimp validation)
    if (body.email === 'invalid-mailchimp@test.com') {
      return HttpResponse.json(
        {
          title: 'Invalid Resource',
          detail: 'The email address is not valid',
        },
        { status: 400 }
      );
    }

    // Simulate successful subscription
    return HttpResponse.json({
      message: 'Success! Thank you for subscribing :)',
    });
  }),

  // Mock Mailchimp API for direct testing
  http.post('https://*.api.mailchimp.com/3.0/lists/*/members', async ({ request }) => {
    const body = (await request.json()) as {
      email_address?: string;
      status?: string;
      merge_fields?: {
        FNAME?: string;
        LNAME?: string;
      };
    };

    if (!body.email_address) {
      return HttpResponse.json(
        { title: 'Invalid Resource', detail: 'Email is required' },
        { status: 400 }
      );
    }

    return HttpResponse.json({
      id: 'mock-member-id',
      email_address: body.email_address,
      status: body.status || 'subscribed',
    });
  }),
];

// Error handlers for testing error scenarios
export const errorHandlers = {
  donationRecordFailure: http.post(
    `${MOCK_SERVER_BASE_URL}/api/donations`,
    () => {
      return HttpResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }
  ),

  btcPayFailure: http.post('/api/create-donation', () => {
    return HttpResponse.json(
      { error: 'Payment system configuration error' },
      { status: 500 }
    );
  }),

  stripeFailure: http.post('/api/create-stripe-checkout', () => {
    return HttpResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }),

  networkError: http.post(`${MOCK_SERVER_BASE_URL}/api/donations`, () => {
    return HttpResponse.error();
  }),

  newsletterServerError: http.post('/subscribe-newsletter', () => {
    return HttpResponse.json(
      { error: 'An Error Occurred' },
      { status: 500 }
    );
  }),
};

export { MOCK_SERVER_BASE_URL };

