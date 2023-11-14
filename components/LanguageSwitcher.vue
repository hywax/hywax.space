<template>
  <div v-if="locales.length > 1" class="relative inline-block text-left">
    <button
      ref="trigger"
      class="p-1 rounded-sm font-semibold transition bg-transparent hover:bg-transparent link"
      @click="visible = !visible"
    >
      <PhosphorIconTranslate class="block w-6 h-6" />
    </button>

    <div
      ref="dropdown"
      role="menu"
      class="absolute left-0 md:right-0 md:left-auto z-10 mt-2 w-36 origin-top-right rounded-md bg-white dark:bg-surface shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      :style="`display: ${visible ? 'block' : 'none'}`"
    >
      <div class="py-1" role="none">
        <a
          v-for="loc in localesMap"
          :key="loc.code"
          :href="switchLocalePath(loc.code)"
          role="menuitem"
          class="block rounded-sm px-4 py-2 transition hover:text-accent"
          @click="visible = false"
        >
          {{ loc?.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onClickOutside } from '@vueuse/core'
  import { useLocale } from '~/composables/useLocale'

  const { locales, localesMap } = useLocale()

  const trigger = ref<HTMLButtonElement>()
  const dropdown = ref<HTMLDivElement>()
  const visible = ref(false)

  onClickOutside(
    dropdown,
    () => {
      if (visible.value === true) {
        visible.value = false
      }
    },
    { ignore: [trigger] }
  )
</script>
