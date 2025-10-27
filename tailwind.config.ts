import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["var(--font-work-sans)"],
        inknutAntiqua: ["var(--font-inknut-antiqua)"],
        josefinSlab: ["var(--font-josefin-slab)"],
        acme: ["var(--font-acme)"],
        josefinSans: ["var(--font-josefin-sans)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
