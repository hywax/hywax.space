import type { IncomingMessage } from 'node:http'

export default [
  { UserAgent: '*' },
  { Disallow: '/?' },
  { BlankLine: true },
  {
    Sitemap: (req: IncomingMessage) => `https://${req.headers.host}/sitemap.xml`,
  },
]
