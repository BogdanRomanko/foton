<script setup lang="ts">
interface IArhieve {
  img: string
  text: string
}

const archiveList: IArhieve[] = [
  {
    img: "flask-potion.png",
    text: "Производим и внедряем приборы автоматизации более 20 лет",
  },
  {
    img: "flask-potion.png",
    text: "Производим и внедряем приборы автоматизации более 20 лет",
  },
  {
    img: "flask-potion.png",
    text: "Производим и внедряем приборы автоматизации более 20 лет",
  },
  {
    img: "flask-potion.png",
    text: "Производим и внедряем приборы автоматизации более 20 лет",
  },
  {
    img: "flask-potion.png",
    text: "Производим и внедряем приборы автоматизации более 20 лет",
  },
]
</script>

<template>
  <div class="content-about-info-achieve">
    <LangingContentAboutAchieveItem
      v-for="item in archiveList"
      :key="item.text"
      :data="item"
    />
  </div>
</template>

<style lang="scss" scoped></style>
