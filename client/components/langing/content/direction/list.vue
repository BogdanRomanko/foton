<script setup lang="ts">
interface ICard {
  img: string
  alt: string
  text: string
}

const data: ICard[] = [
  {
    alt: "Предприятие",
    img: "factory.png",
    text: "Разработка комплексов для металлургических предприятий",
  },
  {
    alt: "Предприятие",
    img: "highvoltage.png",
    text: "Разработка высоковольтных источников питания",
  },
  {
    alt: "Предприятие",
    img: "mine.png",
    text: "Анализ трещино-образования",
  },
]
</script>

<template>
  <div class="content-since-directions-cards">
    <LangingContentDirectionCard
      v-for="card in data"
      :key="card.text"
      :card-data="card"
    />
  </div>
</template>

<style lang="scss" scoped></style>
