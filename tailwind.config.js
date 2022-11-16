/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ['./src/**/*.{html,js}',
      './node_modules/tw-elements/dist/js/**/*.js'],
  ],
  theme: {
    extend: {
      colors: {
        brand: 'rgb(var(--color-brand) / <alpha-value>)',
        'mainColor': '#a125f7',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],

}
