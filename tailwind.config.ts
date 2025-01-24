import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["var(--font-work-sans)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          "custom-100": "#1a1f36",
          "custom-200": "#acd4f7",
          "custom-300": "#00382F",
          "custom-400": "#28257e",
          "custom-500": "#cce5fa",
          "custom-600": "#c4def8",
          "custom-700": "#eff6fc",
        },
        gray: {
          "custom-100": "#fdf7ec",
          "custom-200": "#333",
          "custom-300": "#fcfbe9",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
