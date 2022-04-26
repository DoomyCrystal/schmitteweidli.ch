module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      'sans': ['Source Sans Pro', 'system-ui', 'sans-serif'],
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
