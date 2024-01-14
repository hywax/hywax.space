<template>
  <NuxtLayout>
    <div class="prose m-a">
      <h1>{{ error.statusCode }}</h1>
      <p>{{ error.message }}</p>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  defineProps<{
    error: {
      url: string
      statusCode: number
      statusMessage: string
      message: string
      stack: string
      data: Record<string, any>
    }
  }>()
</script>
