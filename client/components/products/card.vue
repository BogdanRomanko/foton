<script setup lang="ts">
interface ICard {
  img: string
  text: string
}

const { cardData } = defineProps<{
  cardData: ICard
}>()
</script>

<template>
  <div class="products-section-content-card">
    <img :src="`/images/${cardData.img}`" alt="ВИП" />
    <span>{{ cardData.text }}</span>
    <NuxtLink to="/product">Открыть</NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>
