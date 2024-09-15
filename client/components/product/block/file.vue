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

const [filePath] = parseInitData()

function parseInitData(): string[] {
  try {
    if (!initData.content) throw Error

    const data = JSON.parse(initData.content)

    if (!data) throw Error

    return data
  } catch {
    return [""]
  }
}

const url = import.meta.env.VITE_API
</script>

<template>
  <img v-if="filePath" :src="`${url}/${filePath}`" />
</template>

<style lang="scss" scoped></style>
