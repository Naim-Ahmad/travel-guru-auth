/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'title-font': 'Bebas Neue, sans-serif',
        'primary-font': 'Montserrat, sans-serif'
      },
      colors: {
        'warning': '#F9A51A'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

