const colors = require('tailwindcss/colors')
const { spacing } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{html,tsx,ts}',
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {},
    colors: {
      ...colors,
      gray: {
        ...colors.gray,
        300: '#dadada',
      },
      green: {
        ...colors.green,
        500: '#2ECC71',
      },
      neutral: {
        ...colors.neutral,
        200: '#EFEFEF',
        400: '#AEADAD',
      },
      zinc: {
        ...colors.zinc,
        400: '#A5A5A5',
        500: '#8A8888',
        800: '#322F2F',
      },
      orange: {
        ...colors.orange,
        500: '#F5AA34',
        600: '#F39C12',
        700: '#DA8B0B',
      },
    },
    spacing: {
      ...spacing,
      4: '1.25rem',
      5: '1.5625rem',
      6: '1.875rem',
      7: '2.1875rem',
      8: '2.5rem',
      9: '2.8125rem',
      10: '3.125rem',
      12: '3.75rem',
      24: '7.5rem',
      105: '32.8125rem',
    },
  },
  plugins: [
    function customContainer({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@screen sm': {
            maxWidth: '100%',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
          '@screen lg': {
            maxWidth: '942px',
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      })
    },
  ],
}
