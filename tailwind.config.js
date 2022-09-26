/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      mono: ["Ubuntu Mono", "Monaco", "sans-serif"],
      title: ["Ubuntu", "sans-serif"],
      sans: ["proxima-nova", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      serif: ["adobe-garamond-pro", "TimesNewRoman", "Times New Roman", "Times", "Georgia", "serif"]
    },
    colors: {
      slate: colors.slate,
      transparent: "transparent",
      current: "currentColor",
      primary: "#000d74",
      columbiaBlue: {
        DEFAULT: "#C4D8E2",
        100: "#75AADB",
        200: "#6CADDF",
        500: "#008EE0",
        800: "#2C6BAC",
        900: "#0046A6",
      },
      white: "#F9F9F9",
      lightGray: "#EFEFEF",
      sand: "#D3D3C0",
      gray: "#555555",
      blue1: "#41516C",
      blue2: "#093552"
    }
  },
  plugins: [require("@tailwindcss/typography")],
}
