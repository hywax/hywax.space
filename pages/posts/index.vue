<template>
  <div class="mx-auto w-full max-w-[80ch]">
    <ContentDoc v-slot="{ doc }" :query="query">
      <ContentRenderer :value="doc" />

      <PostsGrid layout="column" :items="posts" />
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
  const { getPosts } = usePosts()

  const { query } = useLocaleContent()

  const posts = await getPosts()
</script>
