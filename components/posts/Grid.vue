<template>
  <div class="mt-12">
    <div class="select-none relative h20 pointer-events-none">
      <h2 class="text-8em color-transparent absolute left--3rem top--2rem font-bold text-stroke-2 text-stroke-hex-aaa op10">
        {{ title }}
      </h2>
    </div>

    <PostsCard v-for="(item, key) in items" :key="key" :post="item" />
  </div>
</template>

<script setup lang="ts">
  import type { PostsItem } from '~/types'

  export interface Props {
    title: string
    items?: PostsItem[]
  }

  defineProps<Props>()
</script>
