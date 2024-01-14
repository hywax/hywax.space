export default function (date: string, locales?: string) {
  return toValue(useDateFormat(new Date(date), 'MMM DD', { locales }))
}
