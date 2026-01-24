/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Montserrat', 'sans-serif'], // Remap poppins to montserrat just in case
      },
    },
  },
  plugins: [],
}

