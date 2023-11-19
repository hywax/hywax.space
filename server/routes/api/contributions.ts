import { getContributions } from '~/server/services/contributions'

export default defineEventHandler(async () => {
  return await getContributions()
})
