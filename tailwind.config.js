module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    'pswp__container',
    'pswp__bg',
    'pswp__img',
    'pswp__default-caption',
    'pswp__button--arrow',
  ],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'system-ui', 'sans-serif'],
      'display': ['Caveat Brush'],
    },
    extend: {
      colors: {
        'green': {
          300: '#A6C69F',
          800: '#167500',
        },
        'red': {
          600: '#A6393A',
          800: '#4D1A1B',
        }
      },
      spacing: {
        112: '28rem',
      },
      minWidth: {
        20: '5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // better browser support
  ],
}
