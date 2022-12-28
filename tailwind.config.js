/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxs': {'max':'320px'},
      'xs': {'max':'370px'},
      'sm': {'max':'576px'},
      'md': {'max':'768px'},
      'lg': {'max':'1024px'},
      'xl': {'max':'1280px'},
      '2xl': {'max':'1536px'},
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#7127BA',
      'pLight': '#9857D3',
      'black': '#333333',
      'white': '#ffffff',
    },
    fontFamily: {
      'poppins': 'poppins',
      'plus': 'Plus Jakarta Sans'
    }
},
  plugins: []
}