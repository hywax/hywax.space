import type { PostsContent, PostsItem } from '~/types'

export function usePosts() {
  const { locale } = useI18n()

  const getPosts = async (limit = 0): Promise<PostsItem[]> => {
    const list = await queryContent<PostsContent>('posts')
      .where({
        _locale: toValue(locale.value),
        publishedAt: {
          $exists: true,
        },
      })
      .sort({ publishedAt: -1 })
      .limit(limit)
      .find()

    return list.map((content): PostsItem => ({
      name: content.title!,
      description: content.description || '',
      link: content._path!,
      readingTime: formatReadingTime(content.readingTime.minutes),
      published: formatDate(content.publishedAt, locale.value),
      year: new Date(content.publishedAt).getFullYear(),
    }))
  }

  return {
    getPosts,
  }
}
