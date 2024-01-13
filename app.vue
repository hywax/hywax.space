<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const i18nHead = useLocaleHead({
    addSeoAttributes: {
      canonicalQueries: [],
    },
  })

  useHead({
    htmlAttrs: {
      lang: i18nHead.value.htmlAttrs!.lang,
    },
    link: [...(i18nHead.value.link || [])],
    meta: [...(i18nHead.value.meta || [])],
    bodyAttrs: {
      class: 'font-sans text-gray-700 dark:text-gray-200 relative',
    },
  })
</script>

<style>
  @import '@unocss/reset/tailwind.css';
  @import '~/assets/style/main.css';
  @import '~/assets/style/prose.css';
</style>
