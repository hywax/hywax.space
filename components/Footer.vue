<template>
  <footer class="prose m-a flex my-10 op50">
    <div class="text-sm" :class="textClasses">
      <p
        v-html="$t('site.license', {
          code: `<a href='${licences.code}' rel='nofollow' target='_blank'>MIT</a>`,
          content: `<a href='${licences.content}' rel='nofollow' target='_blank'>CC BY-SA 4.0</a>`,
        })"
      />
    </div>
  </footer>
</template>

<script setup lang="ts">
  const { licences } = useAppConfig()
  const route = useRoute()
  const getRouteBaseName = useRouteBaseName()
  const textClasses = computed(() => {
    const path = getRouteBaseName(route)

    if (path === 'projects') {
      return 'text-center basis-full'
    }
  })
</script>
