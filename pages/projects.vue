<template>
  <div>
    <ContentDoc v-slot="{ doc }" :query="query">
      <ContentRenderer :value="doc" />

      <ProjectsGrid :items="doc.projects" />
    </ContentDoc>

    <h2 class="mb-6 text-2xl font-bold">{{ $t('projects.contributed') }}</h2>
    <ContributedGrid :items="[]" />
  </div>
</template>

<script setup lang="ts">
  const { query } = useLocaleContent()

  // const { getContributions } = useProjects()
  // const contributions = await getContributions()
</script>
