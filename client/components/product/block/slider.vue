<script setup lang="ts">
import type { IBlockInitValue } from "../../admin/constructor/index.vue"

const { initData } = withDefaults(
  defineProps<{
    initData?: IBlockInitValue
  }>(),
  {
    initData: () => ({ content: "", productId: 0, blockId: 0 }),
  },
)

const filesList = parseInitData()

function parseInitData(): string[] {
  try {
    const url = import.meta.env.VITE_API
    if (!initData.content) throw Error

    const data = JSON.parse(initData.content)

    if (!data || !Array.isArray(data)) throw Error
    const t = data.map((path: string) => `${url}/${path}`)
    return t
  } catch {
    return [""]
  }
}
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
