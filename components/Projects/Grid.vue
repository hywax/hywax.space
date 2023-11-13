<template>
  <div v-if="items.length" class="mb-12 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
    <ProjectsCard v-for="(item, key) in items" :key="key" :project="item" class="h-full" />

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
  import type { ProjectsItem } from '~/composables/useProjects'

  export interface Props {
    items: ProjectsItem[]
    moreLink?: RouteLocationRaw
  }

  defineProps<Props>()
</script>
