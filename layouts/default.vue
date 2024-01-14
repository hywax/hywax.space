<template>
  <NavBar />

  <main class="py-10">
    <slot />
  </main>

  <Footer />
</template>

<script setup lang="ts">
  useHead({
    bodyAttrs: {
      class: 'font-sans text-gray-700 dark:text-gray-200 px-4 md:px-10',
    },
  })
</script>
