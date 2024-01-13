<template>
  <div class="flex gap-x-3 justify-between w-full op70 hover:op100 transition">
    <a
      :href="item.url"
      class="text-sm overflow-hidden overflow-ellipsis whitespace-nowrap min-w-0 underline underline-offset-2 decoration-transparent transition-all"
      target="_blank"
      rel="noreferrer nofollow"
    >
      {{ item.name }}
    </a>
    <div class="flex gap-x-1 items-center opacity-50">
      <span class="i-lucide:star w-3 h-3" />
      <span class="text-xs font-medium">{{ item.star }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ContributionsItem } from '~/composables/useProjects'

  export interface Props {
    item: ContributionsItem
  }

  defineProps<Props>()
</script>
