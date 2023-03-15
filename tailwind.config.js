/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'title': ['Quicksand', 'sans-serif'],
      'body': ['Roboto', 'sans-serif'],
    },
    colors: {
      orange: '#F46A06',
      orangeSecondary: '#F8AE79',
      black: '#000000',
      white: '#FFFFFF',
      grey: '#555555',
    },
  },
  plugins: [],
}