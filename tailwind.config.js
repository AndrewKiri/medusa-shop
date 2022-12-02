/** @type {import('tailwindcss').Config} */

// import colors from 'tailwindcss/colors';
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
};
