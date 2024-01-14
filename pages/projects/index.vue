<template>
  <div class="max-w-300 mx-auto">
    <ContentDoc v-slot="{ doc }" :query="query">
      <ContentRenderer :value="doc" class="prose text-center m-a" />

      <ProjectsGrid v-for="(group, key) in doc.groups" :key="key" :title="group.title" :items="group.projects" />

      <ContributedGrid :title="$t('projects.contributions')" :items="contributions" />
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
  const { query } = useLocaleContent()
  const { getContributions } = useProjects()
  const contributions = await getContributions()
</script>
