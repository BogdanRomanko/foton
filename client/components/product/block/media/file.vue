<script setup lang="ts">
import type { IBlockInitValue } from "../../../admin/constructor/index.vue"
import type { BlockMediaContent } from "./index.vue"

defineExpose({
  getData,
})

const { isEdit, initData } = withDefaults(
  defineProps<{
    isEdit?: boolean
    initData?: IBlockInitValue
  }>(),
  {
    isEdit: false,
    initData: () => ({ content: "", productId: 0, blockId: 0 }),
  },
)

const media = ref()

const initBlockData = parseInitData()

function parseInitData(): BlockMediaContent {
  try {
    if (!initData.content) throw Error

    const initContentkData: string[] = JSON.parse(initData.content)

    if (!Array.isArray(initContentkData)) throw Error

    const blockData: BlockMediaContent = {
      ...initData,
      content: initContentkData,
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
    type: "file",
    content: media.value.getData(),
    ...(initBlockData.blockId && { id: initBlockData.blockId }),
    ...(initBlockData.productId && { productId: initBlockData.productId }),
  }
}
</script>

<template>
  <ProductBlockMedia
    ref="media"
    type="file"
    :is-edit="isEdit"
    :content="initBlockData.content"
  />
</template>

<style lang="scss" scoped></style>
