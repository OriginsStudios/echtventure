/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        lineColor: "#eae8e7",
        textColorWhite: "#f0eeeb",
        backgroundColorBlack: "#0e0e0e",
        backgroundColorWhite: "#f0eeeb",
        "custom-green": "#2d5016",
        "light-beige": "#f0eeeb",
      },
      fontFamily: {
        butler: ["Butler", "serif"],
        bowlby: ["var(--font-bowlby-one-sc)", "sans-serif"],
        crimson: ["var(--font-crimson-text)", "serif"],
        roboto: ["var(--font-roboto-condensed)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 180s linear infinite",
      },
    },
  },
  plugins: [
    // Add this inline plugin
    plugin(function ({ addUtilities }) {
      addUtilities({
        // Your new custom utility class
        ".container-padding": {
          paddingLeft: "2rem" /* This is px-8 */,
          paddingRight: "2rem" /* This is px-8 */,
          "@screen lg": {
            paddingLeft: "3rem" /* This is lg:px-12 */,
            paddingRight: "3rem" /* This is lg:px-12 */,
          },
        },
      });
    }),
  ],
};
