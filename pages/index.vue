<template>
  <article class="prose m-a">
    <ContentDoc :query="query" />
  </article>
</template>

<script setup lang="ts">
  const { query } = useLocaleContent()
</script>
