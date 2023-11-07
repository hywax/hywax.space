<template>
  <a
    :href="use.link"
    target="_blank"
    rel="noreferrer nofollow"
    class="relative flex flex-col gap-y-2 h-full rounded-lg p-6 border border-surface hover:border-surface-hover transition-colors"
  >
    <span class="flex flex-row gap-1 flex-wrap items-center">
      <span class="font-bold text-xl tracking-tight mr-2">{{ use.name }}</span>
      <UsesBadges :items="use.badges" />
    </span>

    <span class="text-fg-dimmed font-normal leading-snug">
      {{ use.description }}
    </span>
  </a>
</template>

<script setup lang="ts">
  import type { UsesItem } from '~/composables/useUses'

  export interface Props {
    use: UsesItem
  }

  defineProps<Props>()
</script>
