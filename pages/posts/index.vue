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
  const { query } = useLocaleContent()
  const { getPosts } = usePosts()
  const posts = await getPosts()

  const postsGroupByYear = posts.reduce((acc, post) => {
    if (!Object.hasOwn(acc, post.year)) {
      acc[post.year] = []
    }

    acc[post.year].push(post)

    return acc
  }, {})
  const years = Object.keys(postsGroupByYear).sort((a, b) => b - a)
</script>
