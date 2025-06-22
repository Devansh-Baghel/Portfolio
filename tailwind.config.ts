import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-chromate)"],
      },
      keyframes: {
        "blur-in": {
          "0%": { filter: "blur(8px)", opacity: "0" },
          "100%": { filter: "blur(0px)", opacity: "1" },
        },
      },
      animation: {
        "blur-in-100": "blur-in 100ms ease-out forwards",
        "blur-in-200": "blur-in 200ms ease-out forwards",
        "blur-in-300": "blur-in 300ms ease-out forwards",
        "blur-in-400": "blur-in 400ms ease-out forwards",
        "blur-in-500": "blur-in 500ms ease-out forwards",
        "blur-in-600": "blur-in 600ms ease-out forwards",
        "blur-in-700": "blur-in 700ms ease-out forwards",
        "blur-in-800": "blur-in 800ms ease-out forwards",
        "blur-in-900": "blur-in 900ms ease-out forwards",
        "blur-in-1000": "blur-in 1000ms ease-out forwards",
        "blur-in-1100": "blur-in 1100ms ease-out forwards",
        "blur-in-1200": "blur-in 1200ms ease-out forwards",
        "blur-in-1300": "blur-in 1300ms ease-out forwards",
        "blur-in-1400": "blur-in 1400ms ease-out forwards",
        "blur-in-1500": "blur-in 1500ms ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("tailwindcss-motion")],
};
export default config;
