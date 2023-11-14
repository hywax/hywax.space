import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'
import { useLocale } from '~/composables/useLocale'

export interface PostsItem {
  name: string
  link: string
  readingTime: string
  published: string
}

export interface PostsContent extends MarkdownParsedContent {
  publishedAt: string
}

export const usePosts = () => {
  const { locale } = useLocale()

  const formatDate = (date: string) => new Date(date).toLocaleDateString(locale.value)

  const getPosts = async (limit = 0): Promise<PostsItem[]> => {
    const list = await queryContent<PostsContent>('posts')
      .where({
        _locale: locale.value,
        publishedAt: {
          $exists: true
        }
      })
      .limit(limit)
      .find()

    return list.map((content) => ({
      name: content.title!,
      link: content._path!,
      readingTime: Math.ceil(content.readingTime.minutes).toString(),
      published: formatDate(content.publishedAt)
    }))
  }

  return {
    getPosts,
    formatDate
  }
}
