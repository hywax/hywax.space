import { useSwitchLocalePath } from 'vue-i18n-routing'

export interface LocaleItem {
  code: string
  name: string
  current: boolean
}

export const useLocale = () => {
  const { locale, locales, setLocaleCookie } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const localesMap = computed<Record<LocaleItem['code'], LocaleItem>>(() =>
    locales.value.reduce<Record<LocaleItem['code'], LocaleItem>>((acc, item) => {
      acc[item.code] = {
        code: item.code,
        name: item.name,
        current: locale.value === item.code
      }

      return acc
    }, {})
  )

  const changeLocale = (code: string) => {
    setLocaleCookie(code)

    navigateTo(switchLocalePath(code), {
      external: true
    })
  }

  return {
    locale,
    changeLocale,
    locales: localesMap
  }
}
