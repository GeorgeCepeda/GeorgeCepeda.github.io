/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns:{
        '70/30' : '70% 28%'
      },
      colors: {
        grayish:{
          DEFAULT: '#333333',
          light: '#999999'
        },
        redish:{
          DEFAULT: '#EE0000',
          light: '#FF0000',
          

        }
      }
    },
  },
  plugins: [],
}

