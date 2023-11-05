export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-phosphor-icons'
  ],
  tailwindcss: {
    cssPath: '~/assets/style/tailwind.scss'
  },
  colorMode: {
    classSuffix: ''
  },
  content: {
    locales: [
      // 'en',
      'ru'
    ],
    defaultLocale: 'ru',
    navigation: {
      fields: ['publishedAt']
    }
  },
  i18n: {
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'ru',
    locales: [
      // {
      //  code: 'en',
      //  iso: 'en-US',
      //  name: 'English',
      //  file: 'en-US.json'
      // },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        file: 'ru-RU.json'
      }
    ]
  }
})
