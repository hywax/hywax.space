import type { ContributionsItem, ProjectsContent, ProjectsItem } from '~/types'

export function useProjects() {
  const { locale } = useI18n()
  const getProjects = async (): Promise<ProjectsItem[]> => {
    const page = await queryContent<ProjectsContent>('projects').where({ _locale: locale.value }).findOne()

    return page.projects
  }

  const getContributions = async () => {
    const json = [
      {
        name: 'NginxProxyManager/nginx-proxy-manager',
        url: 'https://github.com/NginxProxyManager/nginx-proxy-manager',
        star: 17161,
      },
      {
        name: 'vitejs/awesome-vite',
        url: 'https://github.com/vitejs/awesome-vite',
        star: 12171,
      },
      {
        name: 'offen/docker-volume-backup',
        url: 'https://github.com/offen/docker-volume-backup',
        star: 1262,
      },
      {
        name: 'nuxt/modules',
        url: 'https://github.com/nuxt/modules',
        star: 839,
      },
      {
        name: 'vitejs/vite-plugin-vue',
        url: 'https://github.com/vitejs/vite-plugin-vue',
        star: 357,
      },
      {
        name: 'alteracs/html-converter',
        url: 'https://github.com/alteracs/html-converter',
        star: 0,
      },
      {
        name: 'copity/copity',
        url: 'https://github.com/copity/copity',
        star: 0,
      },
    ]

    return json

    const { data } = await useFetch<ContributionsItem[]>('/contributions')

    return data
  }

  return {
    getProjects,
    getContributions,
  }
}
