<script setup lang="ts">
interface ICard {
  img: string
  alt: string
  text: string
}

const { cardData } = defineProps<{
  cardData: ICard
}>()
</script>

<template>
  <div class="content-since-directions-cards-element">
    <img :src="`/images/${cardData.img}`" :alt="cardData.alt" />
    <span>{{ cardData.text }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
