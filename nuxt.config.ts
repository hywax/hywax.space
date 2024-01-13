export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  runtimeConfig: {
    social: {
      github: 'https://github.com/hywax',
      twitter: 'https://twitter.com/hywax_',
      telegram: 'https://t.me/hywax',
    },
    host: {
      url: '',
    },
    github: {
      token: '',
    },
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/robots',
  ],
  app: {
    head: {
      titleTemplate: '%s - Hywax',
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
        { ref: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
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
        default: 'material-theme',
        light: 'material-theme-lighter',
        dark: 'material-theme-palenight',
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
})
