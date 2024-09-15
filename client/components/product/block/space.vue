<script setup lang="ts">
import type { IBlockInitValue } from "../../admin/constructor/index.vue"

defineExpose({
  getData,
})

const { initData } = withDefaults(
  defineProps<{
    isEdit?: boolean
    initData?: IBlockInitValue
  }>(),
  {
    isEdit: false,
    initData: () => ({ content: "", productId: 0, blockId: 0 }),
  },
)

function getData() {
  return {
    type: "space",
    content: "-",
    ...(initData.blockId && { id: initData.blockId }),
    ...(initData.productId && { productId: initData.productId }),
  }
}
</script>

<template>
  <UDivider>
    <span class="text">***</span>
  </UDivider>
</template>

<style lang="scss" scoped>
.text {
  width: 100%;
  text-align: center;
  font-size: 30px;
}
</style>
