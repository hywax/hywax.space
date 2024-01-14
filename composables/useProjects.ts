import type { ContributionsItem, ProjectsContent, ProjectsItem } from '~/types'

export function useProjects() {
  const { locale } = useI18n()
  const getProjects = async (): Promise<ProjectsItem[]> => {
    const page = await queryContent<ProjectsContent>('projects').where({ _locale: locale.value }).findOne()

    return page.projects
  }

  const getContributions = async (): Promise<ContributionsItem[]> => {
    const { data } = await useFetch<ContributionsItem[]>('/contributions')

    return toValue(data) || []
  }

  return {
    getProjects,
    getContributions,
  }
}
