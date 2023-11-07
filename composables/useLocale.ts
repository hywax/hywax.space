import type { LocaleObject } from 'vue-i18n-routing'

export const useLocale = () => {
  const { locale, locales } = useI18n()

  const localesMap = computed(() =>
    locales.value.reduce<Record<string, LocaleObject>>((acc, item) => {
      if (typeof item === 'string') {
        acc[item] = {
          code: item,
          name: '...'
        }
      } else {
        acc[item.code] = item
      }

      return acc
    }, {})
  )

  const currentLocale = computed<LocaleObject>(() => localesMap.value[locale.value])

  return {
    locale,
    locales,
    localesMap,
    currentLocale
  }
}
