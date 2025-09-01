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
        "light-background": "#f0eeeb",
        "dark-background": "#0e160f",
        "primary-text-dark": "#232323",
        "primary-accent": "#c04141",
        "grey-light-1": "#e7e7e7",
        "grey-light-2": "#d9d9d9",
        "grey-medium": "#535353",
        "tan-light": "#bfb69f",
        "brown-muted": "#65502a",
        "gold-dark": "#6b4e02",
        "charcoal-dark": "#403840",
        "blue-grey-dark": "#465469",
        "green-dark": "#203828",
        "indigo-dark": "#201840",
      },
      // 2. Your Font Families
      fontFamily: {
        bowlby: ["var(--font-bowlby-one)", "sans-serif"],
        crimson: ["var(--font-crimson-text)", "serif"],
        roboto: ["var(--font-roboto-condensed)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
