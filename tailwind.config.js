/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif',]
        },
        colors: {
          'Orange-900': '#FF5300',
          'Orange-100': '#FFF7F4',
          'Black': '#373737',
          'Gray': '#7B7B7B',
          'Blue': '#00ACFF',
          'Dark': '#18191A',
          'Dark1': '#242526',
          'Dark2': '#3A3B3C',
        },
        screens: {
          'sm-m': '420px',
          'sm-l': '640px',
        }
    },
  },
  plugins: [],
}
