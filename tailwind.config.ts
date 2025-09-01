import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. Your Color Palette
      colors: {
        "light-main-background": "#f0eeeb",
      },
      // 2. Your Font Families
      fontFamily: {
        bowlby: ["var(--font-bowlby-one)"],
        crimson: ["var(--font-crimson-text)"],
        roboto: ["var(--font-roboto-condensed)"],
      },
    },
  },
  plugins: [],
};
export default config;
