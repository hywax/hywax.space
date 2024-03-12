<template>
  <p flex="~ gap-3 wrap" class="mt--2!">
    <a :href="social.github" rel="nofollow" target="_blank"><span class="i-uil-github-alt" /> GitHub</a>
    <a :href="social.telegram" rel="nofollow" target="_blank"><span class="i-la-telegram-plane" /> Telegram</a>
  </p>
</template>

<script setup lang="ts">
  const { social } = useAppConfig()
</script>
