/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
   theme: {
    extend: {
    },
    screens: {
      xs: { max: '576px' },
      sm: { min: '577px', max: '768px' },
      md: { min: '769px', max: '992px' },
      lg: { min: '993px', max: '1200px' },
      xl: { min: '1201px' }

    },
    
  },
  corePlugins: {
    // container: false,
    // screens: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          margin: 'auto',
          '@screen xs': {
            maxWidth: '100%',
          },
          '@screen sm': {
            maxWidth: '576px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '992px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
        },
        
        '.width-xs': {
          margin: 'auto',
          width: '576px'
        }
      }
      
      
      )
    }
  ],

}