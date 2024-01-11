import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

export function useLocaleContent() {
  const { locale } = useLocale()
  const route = useRoute()

  const query: QueryBuilderParams = computed(() => ({
    locale: locale.value,
    path: route.fullPath.replace(`/${locale.value}`, '') || '/',
  }))

  return {
    query,
  }
}
