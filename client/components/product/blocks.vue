<script setup lang="ts">
import type { IBlock } from "../../pages/product/[id].vue"
import {
  ProductBlockHeader,
  ProductBlockCode,
  ProductBlockText,
  ProductBlockSpace,
  ProductBlockMedia,
  ProductBlockSlider,
  ProductBlockList,
} from "#components"

const { blocks } = defineProps<{
  blocks: IBlock[]
}>()

function getComponent(type: string) {
  if (type === "header") {
    return ProductBlockHeader
  } else if (type === "text") {
    return ProductBlockText
  } else if (type === "space") {
    return ProductBlockSpace
  } else if (type === "code") {
    return ProductBlockCode
  } else if (type === "list") {
    return ProductBlockList
  } else if (type === "media") {
    return ProductBlockMedia
  } else if (type === "slider") {
    return ProductBlockSlider
  }

  return null
}
</script>

<template>
  <template v-for="(block, id) in blocks" :key="id">
    <component :is="getComponent(block.type)" :content="block.content" />
  </template>
</template>

<style lang="scss" scoped></style>
