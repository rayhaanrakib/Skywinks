/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0BAC7C',
        secondary: '#262626',
        accent: '#FF8080',
      }
    },
  },
  daisyui: {
    themes: ["pastel"],
  },
  plugins: [require("daisyui")],
}

