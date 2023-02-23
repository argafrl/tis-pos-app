/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      interRegular: ["InterRegular", "sans-serif"],
      interSemiBold: ["InterSemiBold", "sans-serif"],
      interBold: ["InterBold", "sans-serif"],
    }
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
}
