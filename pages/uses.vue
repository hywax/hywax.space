<template>
  <div class="mx-auto max-w-[80ch]">
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer :value="doc" />

      <h2 class="text-3xl font-bold mb-6">{{ $t('uses.apps') }}</h2>

      <h3 class="text-xl font-semibold mb-4">{{ $t('uses.general') }}</h3>
      <UsesGrid :items="doc.apps.general" />

      <h3 class="text-xl font-semibold mt-8 mb-4">{{ $t('uses.development') }}</h3>
      <UsesGrid :items="doc.apps.development" />

      <h3 class="text-xl font-semibold mt-8 mb-4">{{ $t('uses.utilities') }}</h3>
      <UsesGrid :items="doc.apps.utilities" />

      <h3 class="text-xl font-semibold mt-8 mb-4">{{ $t('uses.browserExtensions') }}</h3>
      <UsesGrid :items="doc.apps.browserExtensions" />

      <h2 class="text-3xl font-bold mt-12 mb-6">{{ $t('uses.services') }}</h2>

      <h3 class="text-xl font-semibold mb-4">{{ $t('uses.general') }}</h3>
      <UsesGrid :items="doc.services.general" />

      <h3 class="text-xl font-semibold mt-8 mb-4">{{ $t('uses.webDevelopment') }}</h3>
      <UsesGrid :items="doc.services.webDevelopment" />
    </ContentDoc>
  </div>
</template>
