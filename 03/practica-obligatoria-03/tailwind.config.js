/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "vs-color": {
          DEFAULT: "#452A9F",
          50: "#E4E9F8",
          100: "#CCD2F2",
          200: "#9CA0E5",
          300: "#706CD8",
          400: "#4F3BCB",
          500: "#452A9F",
          600: "#432383",
          700: "#3C1B66",
          800: "#30144A",
          900: "#210C2E",
        },
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
