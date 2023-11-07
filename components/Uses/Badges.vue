<template>
  <span
    v-for="(item, key) in items"
    :key="key"
    :class="[
      'text-xs font-medium text-white px-1.5 py-0.5 rounded-sm',
      `bg-tailwind-${badgeMap[item].color}-500`
    ]"
  >
    {{ badgeMap[item].label }}
  </span>
</template>

<script setup lang="ts">
  import type { UsesBadge } from '~/composables/useUses'

  export interface Props {
    items?: UsesBadge[]
  }

  export type BadgeMap = Record<UsesBadge, { label: string; color: string }>

  const { t } = useI18n()

  const badgeMap: BadgeMap = {
    opensource: {
      label: t('uses.badge.opensource'),
      color: 'green'
    },
    paid: {
      label: t('uses.badge.paid'),
      color: 'amber'
    },
    freemium: {
      label: t('uses.badge.freemium'),
      color: 'amber'
    },
    macos: {
      label: t('uses.badge.macos'),
      color: 'sky'
    },
    ios: {
      label: t('uses.badge.ios'),
      color: 'sky'
    }
  }

  defineProps<Props>()
</script>
