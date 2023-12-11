/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1680px",
      },
      backgroundImage: {
        gradient1: "url('./assets/gradient1.png')",
        gradient2: "url('./assets/gradient2.png')",
      }
    },
  },
  plugins: [],
}