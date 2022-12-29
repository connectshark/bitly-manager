// https://nuxt.com/docs/api/configuration/nuxt-config
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
    public: {
      CLIENT_ID: process.env.NUXT_CLIENT_ID,
      REDIRECT_URL: process.env.NUXT_REDIRECT_URL,
      API_URL: process.env.NUXT_API_URL
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    viewer: false
  }
})
