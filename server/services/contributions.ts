import type { ContributionsItem } from '~/composables/useProjects'

const storage = useStorage<ContributionsItem[]>('contributions')

interface Repository {
  nameWithOwner: string
  url: string
  stargazers: {
    totalCount: number
  }
  isPrivate: boolean
  isFork: boolean
}

interface GraphQLResponse {
  viewer: {
    repositoriesContributedTo: {
      nodes: Repository[]
      pageInfo: {
        hasNextPage: boolean
        endCursor: string
      }
    }
  }
}

const queryContributions = `{
  viewer {
    repositoriesContributedTo(
      first: 100
      contributionTypes: [COMMIT, PULL_REQUEST, REPOSITORY]
      orderBy: {field: STARGAZERS, direction: DESC}
    ) {
      nodes {
        nameWithOwner
        url
        stargazers {
          totalCount
        }
        isPrivate
        isFork
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}`

export const fetchContributions = async (): Promise<ContributionsItem[]> => {
  if (!import.meta.env.NUXT_GITHUB_TOKEN) {
    return []
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.NUXT_GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: queryContributions
      })
    })

    const data = (await response.json()) as { data: GraphQLResponse }

    return data.data.viewer.repositoriesContributedTo.nodes
      .filter((repository) => !repository.isPrivate && !repository.isFork)
      .map<ContributionsItem>((repository) => ({
        name: repository.nameWithOwner,
        url: repository.url,
        star: repository.stargazers.totalCount
      }))
  } catch (e) {
    // ...
  }

  return []
}

export const collectContributions = async (): Promise<void> => {
  const data = await fetchContributions()

  await storage.setItem('items', data)
}

export const getContributions = async () => {
  return (await storage.getItem('items')) || []
}
