import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export interface PostsItem {
  name: string
  description: string
  link: string
  readingTime: string
  published: string
  year: number
}

export interface PostsContent extends MarkdownParsedContent {
  publishedAt: string
}
