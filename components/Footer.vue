<template>
  <footer class="mt-36 flex flex-col items-center gap-y-4 w-full self-center">
    <div v-if="socialItems.length" class="flex items-center flex-wrap gap-3 mb-4">
      <a
        v-for="(item, key) in socialItems"
        :key="key"
        :href="item.to"
        class="text-2xl rounded p-1 hover:brightness-90 transition-all focus:ring-black/30 dark:focus:ring-white/30"
        target="_blank"
        rel="me noreferrer nofollow"
        :aria-label="item.label"
      >
        <Component :is="item.icon" />
      </a>
    </div>

    <a
      href="https://github.com/hywax/hywax.space"
      class="text-xs text-center block text-fg-dimmed max-w-[30ch] hover:text-fg-less-dimmed transition-colors rounded-sm"
      target="_blank"
      rel="noreferrer nofollow"
    >
      {{ $t('license-text') }}
    </a>
  </footer>
</template>

<script setup lang="ts">
  import type { Component } from 'vue'
  import { PhosphorIconGithubLogo } from '#components'

  interface SocialItem {
    label: string
    to: string
    icon: Component
  }

  const socialItems: SocialItem[] = [
    {
      label: 'Github',
      to: 'https://github.com/hywax',
      icon: PhosphorIconGithubLogo
    }
  ]
</script>
