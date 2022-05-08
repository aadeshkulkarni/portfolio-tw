const { emerald } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        gray: colors.trueGray,
        red: colors.red,
        blue: colors.lightBlue,
        yellow: colors.amber,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        orange: colors.orange,
      },
      spacing: {
        500: "32rem",
        800: "56rem",
        84: "21rem",
        120: "30rem",
        100: "100px",
        200: "200px",
      },
      width:{
        120: "30rem"
      },
      height:{
        120: "30rem"
      },
      fontFamily: {
        "roboto-slab": ['"Roboto Slab"'],
      },
    },
  },
  variants: {
    extend: {
     colors:['hover'],
     animation: ['hover', 'focus'],
    }
  },
  plugins: [],
};
