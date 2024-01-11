<template>
  <header
    class="flex flex-col md:flex-row md:justify-between md:items-center md:px-6 py-16 md:mb-12 gap-y-10 md:gap-y-0"
  >
    <NuxtLink
      :to="localePath({ name: 'index' })"
      class="h-card flex gap-x-3 items-center md:px-3 py-2 my-1 transition rounded-sm"
    >
      <img
        src="https://avatars.githubusercontent.com/u/149865959?v=4"
        class="u-photo rounded-full"
        width="32"
        height="32"
        alt="Hywax"
      >
      <span class="p-name tracking-tight leading-none text-2xl font-bold">Hywax</span>
    </NuxtLink>
    <div class="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-4 md:gap-y-0">
      <NuxtLink
        v-for="(item, key) in navigationItems"
        :key="key"
        :to="localePath(item.to)"
        class="flex flex-row gap-x-3 items-center text-lg md:px-3 py-1 rounded-sm font-semibold transition link"
        active-class="text-accent"
      >
        <Component :is="item.icon" class="block w-5 h-5" />
        <span>{{ item.label }}</span>
      </NuxtLink>

      <div class="flex gap-x-4 flex-row items-center md:border-l border-black/10 dark:border-white md:pl-6">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import type { Component } from 'vue'
  import type { RouteLocationRaw } from 'vue-router'
  import { PhosphorIconBookmarkSimple, PhosphorIconPencilSimple, PhosphorIconRocketLaunch } from '#components'

  const { t } = useI18n()

  interface NavigationItem {
    to: RouteLocationRaw
    icon: Component
    label: string
  }

  const navigationItems: NavigationItem[] = [
    {
      to: { name: 'projects' },
      icon: PhosphorIconRocketLaunch,
      label: t('projects'),
    },
    {
      to: { name: 'uses' },
      icon: PhosphorIconBookmarkSimple,
      label: t('uses'),
    },
    {
      to: { name: 'posts' },
      icon: PhosphorIconPencilSimple,
      label: t('blog'),
    },
  ]
</script>
