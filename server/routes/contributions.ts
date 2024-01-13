import type { ContributionsItem } from '~/types'

export default defineEventHandler(async (event): Promise<ContributionsItem[]> => {
  return await useContributions(event)
})
