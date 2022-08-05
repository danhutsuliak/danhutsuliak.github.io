/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'computer': "1600px",
    },
    extend: {
      colors: {
        primary: '#E8D58C',
        secondary: '#212121',
      }
    },
  },
  plugins: [],
}
