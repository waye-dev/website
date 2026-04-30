import { describe, it, expect, vi, beforeEach, beforeAll, afterEach, afterAll } from 'vitest';
import { NextRequest } from 'next/server';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

// Setup MSW server to mock Mailchimp API
const server = setupServer(
  http.post('https://us1.api.mailchimp.com/3.0/lists/test-list-id/members', async ({ request }) => {
    const body = (await request.json()) as {
      email_address?: string;
      status?: string;
      merge_fields?: {
        FNAME?: string;
        LNAME?: string;
      };
    };

    return HttpResponse.json({
      id: 'mock-member-id',
      email_address: body.email_address,
      status: body.status || 'subscribed',
    });
  })
);

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Mock the config module
vi.mock('@/config', () => ({
  MAILCHIMP_API_KEY: 'test-api-key',
  MAILCHIMP_LIST_ID: 'test-list-id',
  MAILCHIMP_SERVER: 'us1',
}));

import { POST } from '@/app/subscribe-newsletter/route';

describe('POST /subscribe-newsletter', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // ============================================
  // SUCCESSFUL SUBSCRIPTION TESTS
  // ============================================
  describe('Successful Subscriptions', () => {
    it('should successfully subscribe a new user', async () => {
      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({
            email: 'test@example.com',
            name: 'John Doe',
          }),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.message).toBe('Success! Thank you for subscribing :)');
    });
  });

  // ============================================
  // VALIDATION ERROR TESTS
  // ============================================
  describe('Validation Errors', () => {
    it('should return 400 when email is missing', async () => {
      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({
            name: 'John Doe',
          }),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Email and name are required');
    });

    it('should return 400 when name is missing', async () => {
      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({
            email: 'test@example.com',
          }),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Email and name are required');
    });

    it('should return 400 when both are missing', async () => {
      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({}),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Email and name are required');
    });

    it('should return 400 when email is empty string', async () => {
      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({
            email: '',
            name: 'John Doe',
          }),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Email and name are required');
    });

    it('should return 400 when name is empty string', async () => {
      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({
            email: 'test@example.com',
            name: '',
          }),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Email and name are required');
    });
  });

  // ============================================
  // MAILCHIMP ERROR HANDLING TESTS
  // ============================================
  describe('Mailchimp Error Handling', () => {
    it('should handle already subscribed member', async () => {
      server.use(
        http.post('https://us1.api.mailchimp.com/3.0/lists/test-list-id/members', () => {
          return HttpResponse.json(
            {
              title: 'Member Exists',
              status: 400,
              detail: 'test@example.com is already a list member.',
            },
            { status: 400 }
          );
        })
      );

      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({
            email: 'test@example.com',
            name: 'John Doe',
          }),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.title).toBe('Member Exists');
    });

    it('should handle invalid email error from Mailchimp', async () => {
      server.use(
        http.post('https://us1.api.mailchimp.com/3.0/lists/test-list-id/members', () => {
          return HttpResponse.json(
            {
              title: 'Invalid Resource',
              status: 400,
              detail: 'Please provide a valid email address.',
            },
            { status: 400 }
          );
        })
      );

      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({
            email: 'invalid-email',
            name: 'John Doe',
          }),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.title).toBe('Invalid Resource');
    });

    it('should handle Mailchimp server error', async () => {
      server.use(
        http.post('https://us1.api.mailchimp.com/3.0/lists/test-list-id/members', () => {
          return HttpResponse.json(
            {
              title: 'Internal Server Error',
              status: 500,
              detail: 'An error occurred processing your request.',
            },
            { status: 500 }
          );
        })
      );

      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({
            email: 'test@example.com',
            name: 'John Doe',
          }),
        }
      );

      const response = await POST(request);

      expect(response.status).toBe(500);
    });

    it('should handle network error', async () => {
      server.use(
        http.post('https://us1.api.mailchimp.com/3.0/lists/test-list-id/members', () => {
          return HttpResponse.error();
        })
      );

      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({
            email: 'test@example.com',
            name: 'John Doe',
          }),
        }
      );

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      // Error message may vary depending on implementation
      expect(data.error).toBeDefined();
    });
  });

  // ============================================
  // EDGE CASES
  // ============================================
  describe('Edge Cases', () => {
    it('should handle special characters in name', async () => {
      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({
            email: 'test@example.com',
            name: "O'Connor-Smith",
          }),
        }
      );

      const response = await POST(request);

      expect(response.status).toBe(200);
    });

    it('should handle unicode characters in name', async () => {
      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({
            email: 'test@example.com',
            name: 'José García',
          }),
        }
      );

      const response = await POST(request);

      expect(response.status).toBe(200);
    });

    it('should handle very long email addresses', async () => {
      const longEmail = 'a'.repeat(64) + '@' + 'b'.repeat(63) + '.com';

      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({
            email: longEmail,
            name: 'Test User',
          }),
        }
      );

      const response = await POST(request);

      expect(response.status).toBe(200);
    });

    it('should handle email with plus sign', async () => {
      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({
            email: 'test+newsletter@example.com',
            name: 'Test User',
          }),
        }
      );

      const response = await POST(request);

      expect(response.status).toBe(200);
    });

    it('should handle pseudonym/nym names', async () => {
      const request = new NextRequest(
        'http://localhost/subscribe-newsletter',
        {
          method: 'POST',
          body: JSON.stringify({
            email: 'satoshi@bitcoin.org',
            name: 'Satoshi Nakamoto',
          }),
        }
      );

      const response = await POST(request);

      expect(response.status).toBe(200);
    });
  });
});
