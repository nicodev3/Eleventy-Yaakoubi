const colors = require('tailwindcss/colors');

module.exports = {
  prefix: 'tw-',
  purge: ['./src/**/*.ejs', './src/**/*.md'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        green: colors.green,
        yellow: colors.amber,
      },
    },
  },
  variants: {},
  plugins: [],
};
