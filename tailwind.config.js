/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        lexendDeca: "Lexend Deca",
      },
      colors: {
        veryDarkBlue: "hsl(233, 47%, 7%)",
        darkDesaturedBlue: "hsl(244, 38%, 16%)",
        softViolet: "hsl(277, 64%, 61%)",
        white: "hsl(0, 0%, 100%)",
        slightlyTransparentWhiteMain: "hsla(0, 0%, 100%, 0.75)",
        slightlyTransparentWhiteStat: "hsla(0, 0%, 100%, 0.6)",
      },
    },
  },
  plugins: [],
};
