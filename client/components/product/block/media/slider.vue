<script setup lang="ts">
import type { IBlockInitValue } from "../../../admin/constructor/index.vue"
import type { BlockMediaContent } from "./index.vue"

defineExpose({
  getData,
})

const { isEdit, initData } = withDefaults(
  defineProps<{
    isEdit?: boolean
    initData?: string
  }>(),
  {
    isEdit: false,
    initData: "",
  },
)

const media = ref()

const initBlockData = parseInitData()

function parseInitData(): BlockMediaContent {
  try {
    const initBlockData: IBlockInitValue = JSON.parse(initData)

    if (!initBlockData.content) throw Error

    const blockData: BlockMediaContent = {
      ...initBlockData,
      content: [],
    }

    return blockData
  } catch {
    return {
      content: [],
    }
  }
}

function getData() {
  if (!media.value) return

  return {
    type: "slider",
    content: media.value.getData(),
    ...(initBlockData.blockId && { id: initBlockData.blockId }),
    ...(initBlockData.productId && { productId: initBlockData.productId }),
  }
}
</script>

<template>
  <ProductBlockMedia
    ref="media"
    type="slider"
    :is-edit="isEdit"
    :content="initBlockData.content"
  />
</template>

<style lang="scss" scoped></style>
