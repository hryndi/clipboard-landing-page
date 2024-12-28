/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: [`"Bai Jamjuree", "serif"`],
      },
      colors: {
        primary: {
          strongCyan: "hsl(171, 66%, 44%)",
          lightBlue: "hsl(233, 100%, 69%)",
        },
        neutral: {
          darkGrayBlue: "hsl(210, 10%, 33%)",
          grayBlue: "hsl(201, 11%, 66%)",
        },
      },
    },
  },
  plugins: [],
};
