<template>
  <div class="relative self-center">
    <button ref="trigger" class="op60 hover:op100 transition" :aria-label="$t('langSwitcher.change')" @click="visible = !visible">
      <div class="i-ph-translate" />
    </button>

    <div
      v-show="visible"
      ref="dropdown"
      role="menu"
      class="dropdown absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <div class="py-1">
        <NuxtLink
          v-for="loc in locales"
          :key="loc.code"
          :to="switchLocalePath(loc.code)"
          role="menuitem"
          class="item block w-full px-4 py-2 text-left text-sm transition"
        >
          {{ loc?.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onClickOutside } from '@vueuse/core'

  const { locales } = useI18n()

  const trigger = ref<HTMLButtonElement>()
  const dropdown = ref<HTMLDivElement>()

  const visible = ref(false)

  onClickOutside(dropdown, () => {
    if (visible.value) {
      visible.value = false
    }
  }, { ignore: [trigger] })
</script>

<style scoped>
  .dropdown {
    background-color: var(--surface);
  }

  .item {
    opacity: .5;
  }

  .item:hover {
    opacity: 1;
    background-color: var(--surface-hover);
  }
</style>
