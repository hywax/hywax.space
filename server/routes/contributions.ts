import type { ContributionsItem } from '~/types'

export default cachedEventHandler(async (event): Promise<ContributionsItem[]> => {
  return await useContributions(event)
}, { maxAge: 60 })
