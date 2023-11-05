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
        <NuxtLink
          v-for="loc in localesMap"
          :key="loc.code"
          :to="switchLocalePath(loc.code)"
          role="menuitem"
          class="block rounded-sm px-4 py-2 transition hover:text-accent"
          active-class="bg-surface-hover"
          @click="visible = false"
        >
          {{ loc?.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { LocaleObject } from 'vue-i18n-routing'
  import { onClickOutside } from '@vueuse/core'

  const { locales } = useI18n()

  const localesMap = computed(() =>
    locales.value.reduce<Record<string, LocaleObject>>((acc, item) => {
      if (typeof item === 'string') {
        acc[item] = {
          code: item,
          name: '...'
        }
      } else {
        acc[item.code] = item
      }

      return acc
    }, {})
  )

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
