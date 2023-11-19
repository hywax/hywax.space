import { defineCronHandler } from '#nuxt/cron'
import { collectContributions } from '~/server/services/contributions'

export default defineCronHandler('daily', () => {
  return collectContributions()
})
