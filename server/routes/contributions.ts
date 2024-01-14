import type { ContributionsItem } from '~/types'

export default cachedEventHandler(async (): Promise<ContributionsItem[]> => {
  return await useContributions()
}, { maxAge: 60 })
