import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export interface ProjectsItem {
  name: string
  description: string
  link: string
  featured?: boolean
}

export interface ProjectsContent extends MarkdownParsedContent {
  projects: ProjectsItem[]
}

export interface ContributionsItem {
  name: string
  url: string
  star: number
}

export const useProjects = () => {
  const getProjects = async (limit = 0): Promise<ProjectsItem[]> => {
    const page = await queryContent<ProjectsContent>('projects').findOne()

    return limit ? page.projects.slice(0, limit) : page.projects
  }

  const getContributions = async () => {
    const { data } = await useFetch<ContributionsItem[]>('/api/contributions')

    return data
  }

  return {
    getProjects,
    getContributions
  }
}
