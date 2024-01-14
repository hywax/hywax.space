<template>
  <ContentDoc v-slot="{ doc }" :query="query">
    <ContentRenderer :value="doc" class="prose m-a" />

    <PostsGrid
      v-for="year in years"
      :key="year"
      :title="year"
      :items="postsGroupByYear[year]"
      class="container"
    />
  </ContentDoc>
</template>

<script setup lang="ts">
  import type { PostsItem } from '~/types'

  const { query } = useLocaleContent()
  const { getPosts } = usePosts()
  const posts = await getPosts()

  const postsGroupByYear = posts.reduce<Record<string, PostsItem[]>>((acc, post) => {
    if (!Object.hasOwn(acc, post.year)) {
      acc[post.year] = []
    }

    acc[post.year].push(post)

    return acc
  }, {})
  const years = Object.keys(postsGroupByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))
</script>
