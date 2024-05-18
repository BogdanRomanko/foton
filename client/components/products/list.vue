<script setup lang="ts">
interface ICard {
  img: string
  text: string
}

const data: ICard[] = [
  {
    img: "vip.jpg",
    text: "Краткая информация о высоковольном источнике питания",
  },
  {
    img: "vip.jpg",
    text: "Краткая информация о высоковольном источнике питания",
  },
  {
    img: "vip.jpg",
    text: "Краткая информация о высоковольном источнике питания",
  },
  {
    img: "vip.jpg",
    text: "Краткая информация о высоковольном источнике питания",
  },
  {
    img: "vip.jpg",
    text: "Краткая информация о высоковольном источнике питания",
  },
  {
    img: "vip.jpg",
    text: "Краткая информация о высоковольном источнике питания",
  },
  {
    img: "vip.jpg",
    text: "Краткая информация о высоковольном источнике питания",
  },
  {
    img: "vip.jpg",
    text: "Краткая информация о высоковольном источнике питания",
  },
  {
    img: "vip.jpg",
    text: "Краткая информация о высоковольном источнике питания",
  },
  {
    img: "vip.jpg",
    text: "Краткая информация о высоковольном источнике питания",
  },
  {
    img: "vip.jpg",
    text: "Краткая информация о высоковольном источнике питания",
  },
  {
    img: "vip.jpg",
    text: "Краткая информация о высоковольном источнике питания",
  },
]
</script>

<template>
  <div class="products-section-content">
    <ProductsCard v-for="card in data" :key="card.text" :card-data="card" />
  </div>
</template>

<style lang="scss" scoped></style>
