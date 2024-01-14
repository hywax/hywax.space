export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  runtimeConfig: {
    host: {
      url: '',
    },
    github: {
      token: '',
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/robots',
  ],
  app: {
    head: {
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ],
    },
  },
  colorMode: {
    classSuffix: '',
  },
  content: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    navigation: {
      fields: ['publishedAt'],
    },
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
  },
  i18n: {
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.json',
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        file: 'ru-RU.json',
      },
    ],
  },
  robots: {
    configPath: '~/config/robots',
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
})
