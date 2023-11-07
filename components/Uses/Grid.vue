<template>
  <div v-if="items.length" class="grid grid-cols-1 md:grid-cols-2 gap-2">
    <UsesCard v-for="(item, key) in items" :key="key" :use="item" />
  </div>
  <div
    v-else
    class="py-4 rounded-md border-dashed border-2 border-surface-hover text-fg-less-dimmed text-center font-medium"
  >
    {{ $t('not-found') }}
  </div>
</template>

<script setup lang="ts">
  import type { UsesItem } from '~/composables/useUses'

  export interface Props {
    items: UsesItem[]
  }

  defineProps<Props>()
</script>
