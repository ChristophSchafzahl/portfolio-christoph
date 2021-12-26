const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['"Roboto Slab"', ...defaultTheme.fontFamily.serif],
    },
    colors: {
      teal: colors.teal,
      yellow: colors.yellow,
      amber: colors.amber,
    },
    extend: {
      colors: {
        teal: {
          mid: '#2e5c62',
          dark: '#0d3237',
          darker: '#122527',
        },
      },
      gridTemplateColumns: {
        models: '20rem 1fr',
      },
    },
  },
  plugins: [],
};
