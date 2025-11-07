import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["var(--font-work-sans)"],
        inknutAntiqua: ["var(--font-inknut-antiqua)"],
        josefinSlab: ["var(--font-josefin-slab)"],
        josefinSans: ["var(--font-josefin-sans)"],
        inter: ["var(--font-inter)"],
      },
      height: {
        'screen-dynamic': '100dvh',
        'screen-small': '100svh',
        'screen-large': '100lvh',
      },
      minHeight: {
        'screen-dynamic': '100dvh',
        'screen-small': '100svh',
      },
      maxHeight: {
        'screen-dynamic': '100dvh',
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
          "custom-800": "#B8C8D9BF",
          "custom-900": "#1B1F35",
          "custom-1000": "#F0F6FC",
          "custom-1100": "#283555",
          "custom-1200": "#031C51",
        },
        gray: {
          "custom-100": "#fdf7ec",
          "custom-200": "#333",
          "custom-300": "#fcfbe9",
          "custom-400": "#FCF7ED",
          "custom-500": "#A9A9A9",
          "custom-600": "#000000B2",
          "custom-700": "#E7D7B400",
          "custom-800": "#D9D9D9",
        },
        orange: {
          "custom-100": "#FBE5C4",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
