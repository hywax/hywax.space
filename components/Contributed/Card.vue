<template>
  <div class="flex gap-x-2 justify-between w-full">
    <a
      :href="item.url"
      class="font-semibold text-sm overflow-hidden overflow-ellipsis whitespace-nowrap min-w-0 underline underline-offset-2 decoration-transparent hover:decoration-fg-less-dimmed transition-all"
      target="_blank"
      rel="noreferrer nofollow"
    >
      {{ item.name }}
    </a>
    <div class="flex gap-x-1 items-center text-fg-dimmed">
      <PhosphorIconStar class="block w-3 h-3 fill-current stroke-none" />
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
