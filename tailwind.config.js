module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'body': {
          '-webkit-font-smoothing': 'antialiased',
          'text-rendering': 'optimizeLegibility',
        },
      })
    },
  ],
}
