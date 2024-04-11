/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#F45E5E',
        'primary-beige': '#F7D297',
        'primary-green': '#35580F',
        'primary-orange': '#FC9A63',
        'secondary': '#333333',
        'tertiary': '#000000'
      },
      fontFamily: {
        'Poppins': ['Poppins'],
      },
      rotate: {
        '34': '34deg',
        '68': '68deg',
        '102': '102deg',
        '136': '136deg',
        '170': '170deg',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}