/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '375px', 
      'lg': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', 'sans-serif'",
        outfit: "'Outfit', 'sans-serif'",
        quicksand: "'Quicksand', 'sans-serif'"
      },

      colors: {
        main: '#4A23E4',
        dark: '#010E32',
        text: '#515151',
        accent: '#CEC3FC',
      },
    },
  },
  plugins: [],
}

