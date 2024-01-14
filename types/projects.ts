import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export interface ProjectsItem {
  name: string
  description: string
  link: string
  icon?: boolean
}

export interface ProjectsContent extends MarkdownParsedContent {
  projects: ProjectsItem[]
}

export interface ContributionsItem {
  name: string
  url: string
  star: number
}
