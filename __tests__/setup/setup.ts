import '@testing-library/jest-dom';
import { beforeAll, afterAll, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './mocks/server';

// Establish API mocking before all tests
beforeAll(() => {
  server.listen({ onUnhandledRequest: 'warn' });
});

// Reset any request handlers that we may add during the tests
// so they don't affect other tests
afterEach(() => {
  cleanup();
  server.resetHandlers();
  vi.clearAllMocks();
});

// Clean up after all tests are done
afterAll(() => {
  server.close();
});

// Mock window.gtag for analytics tests
Object.defineProperty(window, 'gtag', {
  value: vi.fn(),
  writable: true,
});

// Mock window.dataLayer for analytics tests
Object.defineProperty(window, 'dataLayer', {
  value: [],
  writable: true,
});

// Mock console methods to reduce noise in tests
vi.spyOn(console, 'error').mockImplementation(() => {});
vi.spyOn(console, 'warn').mockImplementation(() => {});
vi.spyOn(console, 'log').mockImplementation(() => {});

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
  })),
  usePathname: vi.fn(() => '/'),
  useSearchParams: vi.fn(() => new URLSearchParams()),
}));

// Mock Next.js Image component - using createElement to avoid JSX in .ts file
vi.mock('next/image', async () => {
  const React = await import('react');
  return {
    default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => {
      return React.createElement('img', { src, alt, ...props });
    },
  };
});

// Mock window.location
const mockLocation = {
  href: 'http://localhost:3000',
  assign: vi.fn(),
  replace: vi.fn(),
  reload: vi.fn(),
  hash: '',
};

Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true,
});

