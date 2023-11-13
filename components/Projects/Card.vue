<template>
  <a
    class="flex flex-col justify-between p-6 rounded-lg transition-all bg-surface hover:bg-surface-hover shadow-md shadow-surface/20"
    target="_blank"
    rel="noreferrer nofollow"
    :href="project.link"
  >
    <div class="flex flex-col gap-y-2">
      <h3 class="font-bold text-xl">
        {{ project.name }}
      </h3>
      <p class="text-fg-dimmed leading-snug">
        {{ project.description }}
      </p>

      <Component :is="icon" class="lock w-5 h-5 mt-8 self-end text-current" />
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
</script>
