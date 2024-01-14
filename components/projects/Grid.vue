<template>
  <div class="mt-12">
    <h2 class="mb-8 font-bold text-center text-lg op75">
      {{ title }}
    </h2>
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      <ProjectsCard
        v-for="(item, key) in items"
        :key="key"
        :project="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ProjectsItem } from '~/types'

  export interface Props {
    title: string
    items: ProjectsItem[]
  }

  defineProps<Props>()
</script>
