const colors = require('tailwindcss/colors')
const { spacing } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{html,tsx,ts}',
  ],
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
    },
    spacing: {
      ...spacing,
      5: '1.5625rem',
      6: '1.875rem',
      7: '2.1875rem',
      105: '32.8125rem',
    },
  },
  plugins: [],
}
