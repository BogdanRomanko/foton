<script setup lang="ts">
interface IArhieve {
  img: string
  text: string
}

const { data } = defineProps<{
  data: IArhieve
}>()
</script>

<template>
  <div class="content-about-info-achieve-element">
    <img :src="`/images/${data.img}`" alt="" />
    <span>{{ data.text }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
