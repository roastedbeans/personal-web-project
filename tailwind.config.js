/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      raleway: ["raleway"],
      rajdhani: ["rajdhani"],
      hind: ["hind"],
    },

    extend: {
      keyframes: {
        pulse: {
          "0%": { opacity: "0" },
          "50%": { opacity: ".5" },
          "100%": { opacity: "1" },
        },
      },
      colors: {
        primary: "#181818",
        secondary: "#f5cb5b",
        tertiary: "#333532",
      },
    },
  },
  plugins: [],
};
