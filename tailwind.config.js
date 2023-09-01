module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      transitionProperty: {
        'background-color': '#34344a',
      },
      fontFamily: {
        'abhaya': ['Abhaya Libre', 'serif'],      
        'a': ['Cormorant', 'serif'] 
      },
      'default': '#333333'
     },

     colors: {
      main: '#10120B',
      main_lighter: '#33342F',
      secondary: '#34344a',
      secondary_contrast: '#192948',
      secondary_pop: '#1B8198',
      white: '#ffffff'

     }
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }