<script setup lang="ts">
const { content } = defineProps<{
  content: string
}>()

const url = import.meta.env.VITE_API
const filesList = JSON.parse(content).map((path: string) => `${url}/${path}`)
</script>

<template>
  <UCarousel
    v-if="filesList.length > 0"
    v-slot="{ item }"
    :items="filesList"
    :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }"
    arrows
    indicators
  >
    <img :src="item" width="300" height="400" draggable="false" />
  </UCarousel>
</template>

<style lang="scss" scoped></style>
