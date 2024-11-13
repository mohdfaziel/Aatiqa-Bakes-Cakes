/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite', // Define the float animation
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)', // Start and end at the original position
          },
          '50%': {
            transform: 'translateY(-10px)', // Move up 10px at the middle of the animation
          },
        },
      },
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
