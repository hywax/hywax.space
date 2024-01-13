<template>
  <h2 class="mt-12 mb-8 font-bold text-center text-lg op75">
    {{ title }}
  </h2>

  <div class="grid grid-cols-1 gap-y-2 gap-x-4 md:grid-cols-2 lg:grid-cols-3">
    <ContributedCard
      v-for="(item, key) in items"
      :key="key"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
  import type { ContributionsItem } from '~/types'

  export interface Props {
    title: string
    items: ContributionsItem[]
  }

  defineProps<Props>()
</script>
