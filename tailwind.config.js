/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark1: "#27282C",
        dark2: "#393A3F",
        unactive: "#747677",
        active: "#FEFDFF",
        main: "#E9A6F8",
      },
    },
    plugins: [],
  },
};
