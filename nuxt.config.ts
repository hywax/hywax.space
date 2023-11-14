export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  runtimeConfig: {
    host: {
      url: ''
    },
    github: {
      token: ''
    }
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-phosphor-icons',
    'nuxt-cron',
    '@nuxtjs/robots'
  ],
  app: {
    head: {
      titleTemplate: '%s - Hywax',
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { ref: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
      ]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/style/tailwind.scss'
  },
  colorMode: {
    classSuffix: ''
  },
  cron: {
    runOnInit: true
  },
  content: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    navigation: {
      fields: ['publishedAt']
    },
    highlight: {
      theme: {
        default: 'material-theme',
        light: 'material-theme-lighter',
        dark: 'material-theme-palenight'
      }
    },
    markdown: {
      remarkPlugins: ['remark-reading-time']
    }
  },
  i18n: {
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'ru',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.json'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        file: 'ru-RU.json'
      }
    ]
  },
  robots: {
    rules: {
      disallow: '/?',
      sitemap: `${process.env.NUXT_HOST_URL}/sitemap.xml`
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
