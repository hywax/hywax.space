<template>
  <h3 :id="id">
    <slot />
    <a
      v-if="id && generate"
      :href="`#${id}`"
      class="anchor"
    >
      #
    </a>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
  import { computed, useRuntimeConfig } from '#imports'

  const props = defineProps<{ id?: string }>()

  const { headings } = useRuntimeConfig().public.mdc
  const generate = computed(() => props.id && headings?.anchorLinks?.h3)
</script>
