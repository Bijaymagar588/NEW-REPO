/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'eurostile': ['Roboto', 'sans-serif'],
        'black-ops-one': ['"Black Ops One"', 'system-ui']
      },
      colors: {
        'custom-red': '#D80027',
        'custom-orange': '#FB9E3C',
        
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'custom-red': '#D80027',
        'custom-orange': '#FB9E3C',
      }),
    },
  },
  plugins: [],
}
