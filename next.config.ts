import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable SWC minification (faster than Terser)
  swcMinify: true,

  // Experimental optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['gsap', 'framer-motion', '@gsap/react'],
  },

  // Production source maps disabled for faster builds
  productionBrowserSourceMaps: false,
};

export default nextConfig;
