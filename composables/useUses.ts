import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export type UsesBadge = 'opensource' | 'paid' | 'freemium' | 'macos' | 'ios'

export interface UsesItem {
  name: string
  description: string
  link: string
  badges?: UsesBadge[]
}

export interface UsesContent extends MarkdownParsedContent {
  apps: {
    general: UsesItem[]
    development: UsesItem[]
    utilities: UsesItem[]
    browserExtensions: UsesItem[]
  }
  services: {
    general: UsesItem[]
    webDevelopment: UsesItem[]
  }
}
