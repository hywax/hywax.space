<template>
  <article class="prose enhanced-prose">
    <ContentDoc />

    <h2 class="text-3xl">{{ $t('blog') }}</h2>
    <div class="not-prose">
      <PostsGrid :items="posts" :more-link="posts.length > 6 ? localePath({ name: 'posts' }) : null" />
    </div>

    <h2 class="text-3xl">{{ $t('projects') }}</h2>
    <div class="not-prose">
      <ProjectsGrid
        :items="projects"
        :more-link="projects.length > 6 ? localePath({ name: 'projects' }) : null"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
  import { useProjects } from '~/composables/useProjects'
  import { usePosts } from '~/composables/usePosts'

  const { getProjects } = useProjects()
  const projects = await getProjects(7)

  const { getPosts } = usePosts()
  const posts = await getPosts(7)
</script>
