export default defineNuxtConfig({
  app: {
    head: {
      title: 'Bitly Manager',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Poppins&display=swap' }
      ],
    }
  },
  runtimeConfig: {
    CLIENT_SECRET: process.env.NUXT_BITLY_CLIENT_SECRET,
    BASE_URL: process.env.NUXT_API_URL,
    public: {
      CLIENT_ID: process.env.NUXT_BITLY_CLIENT_ID,
      REDIRECT_URL: process.env.NUXT_BITLY_REDIRECT_URL,
      API_URL: 'https://api-ssl.bitly.com',
      IS_DEV: process.env.NODE_ENV
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  tailwindcss: {
    viewer: false
  }
})
