<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const i18nHead = useLocaleHead({
    addSeoAttributes: {
      canonicalQueries: []
    }
  })

  useHead({
    htmlAttrs: {
      lang: i18nHead.value.htmlAttrs!.lang
    },
    link: [...(i18nHead.value.link || [])],
    meta: [...(i18nHead.value.meta || [])]
  })
</script>
