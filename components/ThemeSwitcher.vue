<template>
  <button
    ref="trigger"
    class="p-1 rounded-sm font-semibold transition bg-transparent hover:bg-transparent link"
    :aria-label="$t('theme-switcher')"
    @click="isDark = !isDark"
  >
    <PhosphorIconSun class="block w-6 h-6" />
  </button>
</template>

<script setup lang="ts">
  const colorMode = useColorMode()

  const isDark = computed({
    get() {
      return colorMode.value === 'dark'
    },
    set() {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
  })
</script>
