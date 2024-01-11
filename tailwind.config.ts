import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import tailwindTypography from '@tailwindcss/typography'

export default <Partial<Config>>{
  plugins: [tailwindTypography],
  darkMode: 'class',
  content: ['content/**/*.md'],
  safelist: [
    {
      pattern: /bg-tailwind-(green|amber|sky)-500/,
    },
  ],
  theme: {
    colors: {
      'transparent': colors.transparent,
      'black': colors.black,
      'white': colors.white,
      'current': colors.current,

      'fg': 'rgba(var(--fg) / <alpha-value>)',
      'fg-brighter': 'rgba(var(--fg-brighter) / <alpha-value>)',
      'fg-less-dimmed': 'rgba(var(--fg-less-dimmed) / <alpha-value>)',
      'fg-dimmed': 'rgba(var(--fg-dimmed) / <alpha-value>)',
      'accent': 'rgba(var(--accent) / <alpha-value>)',
      'accent-lighter': 'rgba(var(--accent-lighter) / <alpha-value>)',

      'background': 'rgba(var(--background) / <alpha-value>)',
      'surface': 'rgba(var(--surface) / <alpha-value>)',
      'surface-hover': 'rgba(var(--surface-hover) / <alpha-value>)',

      'tailwind': {
        yellow: colors.yellow,
        amber: colors.amber,
        sky: colors.sky,
        green: colors.green,
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'blockquote': {
              'font-style': 'normal',
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
          },
        },
      },
    },
  },
}
