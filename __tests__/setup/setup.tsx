import '@testing-library/jest-dom';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Reset after each test
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  vi.restoreAllMocks();
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
vi.spyOn(console, 'error').mockImplementation(() => { });
vi.spyOn(console, 'warn').mockImplementation(() => { });
vi.spyOn(console, 'log').mockImplementation(() => { });

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

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />;
  },
}));

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
