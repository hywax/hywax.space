<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const { authorName } = useAppConfig()
  const i18nHead = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true,
  })

  useHead({
    htmlAttrs: {
      lang: i18nHead.value.htmlAttrs?.lang,
      dir: i18nHead.value.htmlAttrs?.dir,
    },
    link: [...(i18nHead.value.link || [])],
    meta: [...(i18nHead.value.meta || [])],
    titleTemplate: (titleChunk) => {
      const defaultPostfix = authorName

      if (!titleChunk || titleChunk === defaultPostfix) {
        return defaultPostfix
      }

      return `${titleChunk} - ${defaultPostfix}`
    },
    bodyAttrs: {
      class: 'font-sans text-gray-700 dark:text-gray-200 px-4 md:px-10',
    },
  })
</script>

<style>
  @import '@unocss/reset/tailwind.css';
  @import '~/assets/style/main.css';
  @import '~/assets/style/prose.css';
</style>
