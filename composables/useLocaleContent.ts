import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

export function useLocaleContent() {
  const { locale } = useI18n()
  const { path } = useRoute()

  const query: QueryBuilderParams = {
    locale: locale.value,
    path: path.replace(`/${locale.value}`, '') || '/',
  }

  return {
    query,
  }
}
