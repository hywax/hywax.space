<template>
  <article class="prose enhanced-prose font-prose mb-16 mx-auto max-w-[80ch]">
    <ContentDoc v-slot="{ doc }" :query="query">
      <h1>{{ doc.title }}</h1>
      <ContentRenderer :value="doc" />

      <div>
        <div class="flex flex-row items-center gap-x-2 mb-3 text-fg-dimmed text-sm">
          <PhosphorIconCopyright class="block w-4 h-4 text-fg" />
          <div>
            {{ $t('blog.meta.licensed') }}
            <span class="font-semibold text-fg">CC-BY-SA-4.0</span>
          </div>
        </div>

        <div class="flex flex-row items-center gap-x-2 mb-16 text-fg-dimmed text-sm">
          <PhosphorIconCalendarBlank class="block w-4 h-4 text-fg" weight="bold" />

          <div>
            {{ $t('blog.meta.published') }}
            <span class="font-semibold text-fg">{{ formatDate(doc.publishedAt) }}</span>
          </div>
        </div>
      </div>
    </ContentDoc>
  </article>
</template>

<script setup lang="ts">
  const { formatDate } = usePosts()

  const { query } = useLocaleContent()
</script>
