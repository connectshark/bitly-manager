module.exports = {
  content: [
    'pages/**/*.vue',
    'layouts/**/*.vue',
    'components/**/**.vue',
    'app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)'
      },
      fontFamily: {
        'noto': ['Poppins', 'Noto Sans TC', 'sans-serif']
      }
    },
  },
  plugins: [
  ]
}