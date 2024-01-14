<template>
  <header class="py-7">
    <nav class="flex justify-end items-center flex-gap-6">
      <NuxtLink :to="localePath('index')" class="op60 hover:op100 transition">
        {{ $t('about.title') }}
      </NuxtLink>
      <NuxtLink :to="localePath('projects')" class="op60 hover:op100 transition">
        {{ $t('projects.title') }}
      </NuxtLink>
      <NuxtLink :to="localePath('posts')" class="op60 hover:op100 transition">
        {{ $t('blog.title') }}
      </NuxtLink>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </nav>
  </header>
</template>

<script setup lang="ts">
  const localePath = useLocalePath()
</script>
