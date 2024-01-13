<template>
  <ContentDoc v-slot="{ doc }" :query="query">
    <article class="prose m-a">
      <h1>{{ doc.title }}</h1>

      <p class="op50 mb-12">
        {{ $t('blog.meta.reading', [formatReadingTime(doc.readingTime.minutes)]) }} · {{ formatDate(doc.publishedAt, locale) }}
      </p>

      <ContentRenderer :value="doc" />
    </article>
  </ContentDoc>
</template>

<script setup lang="ts">
  const { locale } = useI18n()
  const { query } = useLocaleContent()
</script>
