import { defineConfig, presetAttributify, presetIcons, presetMini, presetTypography, presetUno, presetWebFonts, transformerDirectives } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  content: {
    filesystem: [
      'content/**/*.md',
    ],
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetMini(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
      collections: {
        custom: FileSystemIconLoader('./assets/icons'),
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
