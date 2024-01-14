<template>
  <NuxtLink
    :to="project.link"
    :target="isExternalUrl(project.link) ? '_blank' : ''"
    class="project relative flex items-center op70 hover:op100 transition"
  >
    <div class="pt-2 pr-4">
      <div class="w-9 h-9 opacity-50" :class="icon" />
    </div>
    <div class="flex-auto">
      <div class="text-normal">
        {{ project.name }}
      </div>
      <div class="text-sm opacity-50 font-normal">
        {{ project.description }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { ProjectsItem } from '~/types'

  export interface Props {
    project: ProjectsItem
  }

  const props = defineProps<Props>()

  const icon = computed(() => {
    return props.project.icon || 'i-uil-github-alt'
  })

  const isExternalUrl = (string) => {
    try {
      return Boolean(new URL(string))
    } catch (e) {}

    return false
  }
</script>

<style scoped>
  .project {
    padding: 0.5rem 0.875rem 0.875rem;
    border-radius: 6px;
    font-size: 1.1rem;
  }

  .project:hover {
    background-color: var(--surface-hover);
  }
</style>
