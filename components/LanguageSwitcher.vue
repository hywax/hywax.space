<template>
  <div v-if="Object.values(locales).length" class="relative inline-block text-left">
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
        <button
          v-for="locale in locales"
          :key="locale.code"
          :disabled="locale.current"
          role="menuitem"
          class="block w-full rounded-sm px-4 py-2 text-left transition hover:text-accent"
          @click.prevent="changeLocale(locale.code)"
        >
          {{ locale?.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onClickOutside } from '@vueuse/core'
  import { useLocale } from '~/composables/useLocale'

  const { locales, changeLocale } = useLocale()

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
    { ignore: [trigger] },
  )
</script>
