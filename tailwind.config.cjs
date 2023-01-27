/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg' : "url('./assets/Decore.png')"
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'volkhov': ['Volkhov', 'sans-serif']
      },
      colors:{
        priRed: '#DF6951',
        priBlack: '#212832',
        priBlue: '#181E4B',
        priHash:  '#5E6282',
        priOrange: '#F1A50',
        priYellow: '#FFF1DA',
        priPurple: '#8A79DF'
      }
    },
  },
  plugins: [],
}