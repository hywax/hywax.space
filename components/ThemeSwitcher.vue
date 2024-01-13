<template>
  <button class="py-2 op60 hover:op100 transition" :aria-label="ariaLabel" @click="isDark = !isDark">
    <div class="i-ri-sun-line dark:i-ri-moon-line" />
  </button>
</template>

<script setup lang="ts">
  const { t } = useI18n()
  const colorMode = useColorMode()

  const isDark = computed({
    get() {
      return colorMode.value === 'dark'
    },
    set() {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    },
  })

  const ariaLabel = computed(() => t(`themeSwitcher.${isDark.value ? 'light' : 'dark'}ModeSwitch`))
</script>
