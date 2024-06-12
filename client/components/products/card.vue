<script setup lang="ts">
interface ICard {
  id: number
  img: string
  text: string
}

const { cardData } = defineProps<{
  cardData: ICard
}>()

const url = import.meta.env.VITE_API
</script>

<template>
  <div class="products-section-content-card">
    <img :src="`${url}/${cardData.img}`" alt="ВИП" />
    <span>{{ cardData.text }}</span>
    <NuxtLink :to="`/product/${cardData.id}`">Открыть</NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>
