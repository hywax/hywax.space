<template>
  <a v-bind="attrs">
    <div class="flex flex-col gap-y-2 h-full">
      <h3 class="font-bold text-xl">
        {{ project.name }}
      </h3>
      <p class="text-fg-dimmed leading-snug mb-8">
        {{ project.description }}
      </p>

      <Component :is="icon" class="lock w-5 h-5 mt-auto self-end text-current" />
    </div>
  </a>
</template>

<script setup lang="ts">
  import type { ProjectsItem } from '~/pages/projects.vue'
  import { PhosphorIconGithubLogo, PhosphorIconLink } from '#components'

  export interface Props {
    project: ProjectsItem
  }

  const props = defineProps<Props>()

  const icon = computed(() => {
    const { link } = props.project

    if (link.includes('github')) {
      return PhosphorIconGithubLogo
    }

    return PhosphorIconLink
  })

  function isExternalUrl(string) {
    try {
      return Boolean(new URL(string))
    } catch (e) {}

    return false
  }

  const attrs = computed(() => {
    return {
      href: props.project.link,
      class:
        'flex flex-col justify-between p-6 rounded-lg transition-all bg-surface hover:bg-surface-hover shadow-md shadow-surface/20',
      ...(isExternalUrl(props.project.link) ? { target: '_blank', rel: 'noreferrer nofollow' } : null),
    }
  })
</script>
