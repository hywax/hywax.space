<template>
  <div class="flex flex-col gap-y-2">
    <NuxtLink
      :to="localePath(post.link)"
      class="text-xl font-semibold hover:underline underline-offset-2 transition text-wrap-balance rounded-md"
    >
      {{ post.name }}
    </NuxtLink>

    <div class="text-sm text-fg-dimmed">
      ~ {{ post.readingTime }} {{ $t('blog.reading.units') }} · {{ post.published }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { PostsItem } from '~/composables/usePosts'

  export interface Props {
    post: PostsItem
  }

  defineProps<Props>()
</script>
