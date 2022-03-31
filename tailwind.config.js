const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          rotate: {
              '15': '5deg',
          },
          colors: {
            teal: colors.teal,
            cyan: colors.cyan,
            zinc: colors.zinc,
            'nft-blue': {
              100: '#b6b7c9',
              200: '#8688a5',
              300: '#3d406f',
              400: '#25285d',
              500: '#0d104b',
              600: '#0a0d3c',
              700: '#080a2d',
              800: '#05061e',
              900: '#03030f',
              },
              'nft-yellow': {
              100: '#efffb9',
              200: '#deff73',
              300: '#d3ff45',
              400: '#c8ff16',
              500: '#b4e614',
              600: '#a0cc12',
              700: '#8cb30f',
              800: '#78990d',
              900: '#64800b',
              }
          }
      },

  },
  variants: {
      extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio')
  ],
}