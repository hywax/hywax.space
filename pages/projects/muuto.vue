<template>
  <div class="mx-auto w-full max-w-[80ch]">
    <ContentDoc v-slot="{ doc }" :query="query">
      <ContentRenderer :value="doc" />
    </ContentDoc>

    <div class="rounded-lg p-6 border border-surface hover:border-surface-hover transition-colors">
      <TransitionGroup tag="ul" name="fade" class="flex flex-wrap gap-2 leading-8 text-xl mb-8">
        <li v-for="(word, key) in words" :key="key">
          {{ word }}
        </li>
      </TransitionGroup>

      <div class="flex gap-x-4 justify-end">
        <button class="text-lg" @click="roll">
          <PhosphorIconArrowsClockwise />
          <span>{{ $t('projects.reload') }}</span>
        </button>
        <a
          href="https://github.com/hywax/muuto"
          class="text-lg buttonish"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <PhosphorIconGithubLogo />
          <span>{{ $t('projects.code') }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import muuto from 'muuto'

  const { query } = useLocaleContent()

  const words = ref<string[]>([])

  const getWords = () => Array.from({ length: 70 }, () => muuto())

  function roll() {
    words.value = [...getWords()]
  }

  onMounted(() => {
    roll()
  })
</script>

<style lang="scss" scoped>
  .fade-move,
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
  }

  .fade-leave-active {
    position: absolute;
  }
</style>
