<script setup lang="ts">
const { content } = defineProps<{
  content: string
}>()

const url = import.meta.env.VITE_API
const filePath = JSON.parse(content)[0]
</script>

<template>
  <img v-if="filePath" :src="`${url}/${filePath}`" />
</template>

<style lang="scss" scoped></style>
