import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/interest/coach",
        destination:
          "https://wayedev.notion.site/33dad5a072b680a4ba86cb168a8810e8",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
