/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: {
        light: "#65d7cc4d",
        main: "#26A69A",
      },
      secondary: {
        main: "#ff62a7",
      },
      info: {
        light: "#000000cc",
        main: "#000000",
        dark: "#a8a8a8",
        contrastText: "#ffffff",
      },
      text: {
        primary: "#212529",
        secondary: "#6c757d",
      },
    },
  },
  plugins: [],
};
