/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      play: ["Play", "sans-serif"],
      bebas: ["Bebas Neue", "cursive"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
