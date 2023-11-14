<template>
  <div v-if="items.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 mb-12">
    <ContributedCard v-for="(item, key) in items" :key="key" :item="item" />
  </div>
  <NotFound v-else>
    {{ $t('projects.not-found') }}
  </NotFound>
</template>

<script setup lang="ts">
  import type { ContributionsItem } from '~/composables/useProjects'

  export interface Props {
    items: ContributionsItem[]
  }

  defineProps<Props>()
</script>
