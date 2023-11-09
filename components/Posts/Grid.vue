<template>
  <div v-if="items.length" :class="gridClasses">
    <PostsCard v-for="(item, key) in items" :key="key" :post="item" />

    <NuxtLink
      v-if="moreLink"
      :to="moreLink"
      class="grid place-content-center w-full h-full py-4 rounded-md border-dashed border-2 border-surface hover:border-surface-hover transition"
    >
      <span class="text-fg-less-dimmed font-medium">{{ $t('more') }} →</span>
    </NuxtLink>
  </div>
  <NotFound v-else />
</template>

<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router'
  import type { PostsItem } from '~/composables/usePosts'

  export interface Props {
    items?: PostsItem[]
    moreLink?: RouteLocationRaw
    layout?: 'grid' | 'column'
  }

  const props = withDefaults(defineProps<Props>(), {
    items: null,
    layout: 'grid',
    moreLink: undefined
  })

  const gridClasses = computed(() => {
    if (props.layout === 'column') {
      return 'flex flex-col gap-y-12'
    }

    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'
  })
</script>
