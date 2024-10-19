/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        silkscreen: ["Silkscreen", "sans-serif"],
        rubik: ["Rubik Bubbles", "system-ui"],
        renie: ["Reenie Beanie", "cursive"],
        londrina: ["Londrina Sketch", "sans-serif"],
      },
    },
  },
  plugins: [],
};
