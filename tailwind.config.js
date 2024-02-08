/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f4f4f4',
        primaryV: '#4BA7FD',
        secondary: '#1e1e1e',
        secondaryV: '#8c8c8c',
        accent: '#6464DD',
      }
    },
  },
  daisyui: {
    themes: ["pastel"],
  },
  plugins: [require("daisyui"), require('preline/plugin'),],
  
}

