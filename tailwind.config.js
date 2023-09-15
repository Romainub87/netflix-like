/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        rouge: "#FC4747",
        dark_blue: "#10141E",
        light_blue: "#5A698F",
        semi_dark_blue: "#161D2F",
        white: "#FFFFFF",
      }
    },
  },
  plugins: [],
}

