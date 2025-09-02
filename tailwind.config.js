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
      colors: {
        lineColor: "#eae8e7",
        textColorWhite: "#f0eeeb",
        backgroundColorBlack: "#0e0e0e",
        backgroundColorWhite: "#fcfaf8;",
      },
      fontFamily: {
        bowlby: ["var(--font-bowlby-one-sc)", "sans-serif"],
        crimson: ["var(--font-crimson-text)", "serif"],
        roboto: ["var(--font-roboto-condensed)", "sans-serif"],
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
