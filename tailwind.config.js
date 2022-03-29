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
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "mode-pulse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "title-pulse": {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.7" },
          "100%": { opacity: "1" },
        },
        "bg-pulse": {
          "0%": { background: "#14B8A6" },
          "50%": { background: "#2DD4BF" },
          "100%": { background: "#14B8A6" },
        },
        curtains: {
          "0%": { transform: "translateY(-700px)" },
          "100%": { transform: "translateY(0px)" },
        },
        drawer: {
          "0%": { transform: "translateY(-50px)" },
          "30%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "mode-pulse": "mode-pulse 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "title-pulse": "title-pulse 1s ease-in infinite",
        "bg-pulse": "bg-pulse 1s linear infinite",
        curtains: "curtains 1s ease-in",
        "curtains-bottom": "curtains-bottom 1s ease-in",
        "moving-container": "moving-container 1s ease-in-out infinite",
        drawer: "drawer 1s linear",
      },
      backgroundImage: {
        wallpaper: 'url("/src/assets/background.jpg")',
      },
      fontFamily: {
        "roboto-slab": ['"Roboto Slab"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
