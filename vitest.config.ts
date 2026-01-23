import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./__tests__/setup/setup.tsx'],
    include: ['__tests__/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', '.next'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: [
        'src/utils/**/*.ts',
        'src/app/services/**/*.ts',
        'src/app/api/**/*.ts',
        'src/app/utils/analytics.ts',
        'src/app/components/email-signup/**/*.tsx',
        'src/app/subscribe-newsletter/**/*.ts',
      ],
      exclude: [
        'node_modules',
        '__tests__',
        '**/*.d.ts',
        '**/*.test.ts',
        '**/*.spec.ts',
        '**/image-urls.ts',
      ],
      thresholds: {
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/app/components'),
    },
  },
});

