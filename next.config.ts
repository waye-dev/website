import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: false,
  register: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  fallbacks: {
    document: "/offline",
  },
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      {
        urlPattern: /^https?.*\.(png|jpg|jpeg|webp|svg|gif|ico)$/,
        handler: "CacheFirst",
        options: {
          cacheName: "images",
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 365 * 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /\.(?:js|css)$/,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "static-resources",
        },
      },
      {
        urlPattern: /^https?.*\/svgs\/.*/,
        handler: "CacheFirst",
        options: {
          cacheName: "svgs",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 365 * 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /^https?:\/\/fonts\.googleapis\.com\/.*/,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 365 * 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /\/_next\/static\/.*/,
        handler: "CacheFirst",
        options: {
          cacheName: "next-static",
        },
      },
    ],
  },
});

const nextConfig: NextConfig = {};

export default withPWA(nextConfig);
