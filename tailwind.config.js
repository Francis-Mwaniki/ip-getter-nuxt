/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js}',
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};