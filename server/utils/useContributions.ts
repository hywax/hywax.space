import type { H3Event } from 'h3'
import type { ContributionsItem } from '~/types'

interface GraphQLResponse {
  data: {
    viewer: {
      repositoriesContributedTo: {
        nodes: {
          nameWithOwner: string
          url: string
          stargazers: {
            totalCount: number
          }
          isPrivate: boolean
          isFork: boolean
        }[]
        pageInfo: {
          hasNextPage: boolean
          endCursor: string
        }
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

export async function useContributions(event: H3Event): Promise<ContributionsItem[]> {
  const config = useRuntimeConfig(event)

  try {
    const response = await $fetch<GraphQLResponse>('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.github.token}`,
        'Content-Type': 'application/json',
      },
      body: {
        query: queryContributions,
      },
      parseResponse: (json) => JSON.parse(json),
    })

    return response.data.viewer.repositoriesContributedTo.nodes
      .filter((repository) => !repository.isPrivate && !repository.isFork)
      .map<ContributionsItem>((repository) => ({
        name: repository.nameWithOwner,
        url: repository.url,
        star: repository.stargazers.totalCount,
      }))
  } catch (e) {
    // ...
  }

  return []
}
