<template>
  <NuxtLink
    :to="localePath(post.link)"
    class="mt-4 block op70 hover:op100 transition"
  >
    <div class="flex items-center">
      <div class="text-lg">
        {{ post.name }}
      </div>
      <div class="ml-3 text-sm opacity-50">
        {{ post.published }} · {{ $t('blog.meta.reading', [post.readingTime]) }}
      </div>
    </div>

    <div v-if="post.description" class="text-sm op50">
      {{ post.description }}
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { PostsItem } from '~/types'

  export interface Props {
    post: PostsItem
  }

  defineProps<Props>()
</script>
