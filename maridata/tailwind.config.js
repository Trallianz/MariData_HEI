/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray0: '#404D53',
        gray1: '#4C5B63',
        gray2: '#6B7F89',
        text0: '#BCC9CF',
        rGreen: '#33BE41',
        rBlue: '#16A88D',
        rPurple: '#8051A5',
      }
    },
  },
  plugins: [],
}