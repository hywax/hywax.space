<template>
  <article class="prose m-a">
    <ContentDoc v-slot="{ doc }" :query="query">
      <ContentRenderer :value="doc" />
    </ContentDoc>

    <a href="https://github.com/hywax/muuto" target="_blank" rel="nofollow"><span class="i-uil:github-alt" /> {{ $t('projects.view.github') }}</a>
    <a href="https://www.npmjs.com/package/muuto" target="_blank" rel="nofollow" class="ml-3"><span class="i-teenyicons:npm-solid" /> {{ $t('projects.view.npm') }}</a>

    <h2>{{ $t('projects.muuto.preview') }}</h2>
    <div class="preview not-prose rounded-lg p-6">
      <TransitionGroup tag="ul" name="fade" class="flex flex-wrap gap-2 mb-8">
        <li v-for="(word, key) in words" :key="key">
          <code>{{ word }}</code>
        </li>
      </TransitionGroup>

      <div class="flex gap-x-4 justify-end">
        <button @click="roll">
          <span class="i-tabler:reload mr-2" />
          <span>{{ $t('projects.muuto.reload') }}</span>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
  import muuto from 'muuto'

  const { query } = useLocaleContent()

  const words = ref<string[]>([])

  function roll() {
    words.value = Array.from({ length: 30 }, () => muuto())
  }

  onMounted(() => {
    roll()
  })
</script>

<style lang="scss" scoped>
  .preview {
    background-color: var(--surface);
  }

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
