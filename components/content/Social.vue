<template>
  <p flex="~ gap-3 wrap" class="mt--2!">
    <a :href="config.social?.github" rel="nofollow" target="_blank"><span class="i-uil-github-alt" /> GitHub</a>
    <a :href="config.social?.twitter" rel="nofollow" target="_blank"><span class="i-ri-twitter-x-fill" /> Twitter</a>
    <a :href="config.social?.telegram" rel="nofollow" target="_blank"><span class="i-la-telegram-plane" /> Telegram</a>
  </p>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()
</script>
