<script setup lang="ts">
import type { IBlockInitValue } from "../../admin/constructor/index.vue"

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

const text = ref(initData.content)

function getData() {
  if (!text.value) return

  return {
    type: "header",
    content: text.value,
    ...(initData.blockId && { id: initData.blockId }),
    ...(initData.productId && { productId: initData.productId }),
  }
}

function onInput(e: Event) {
  text.value = (e.target as HTMLInputElement).innerHTML
}
</script>

<template>
  <h1
    :placeholder="isEdit ? 'Заголовок 1' : undefined"
    :contenteditable="isEdit || undefined"
    @input="onInput"
    v-html="initData.content"
  ></h1>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  padding-top: 6px;
  padding-bottom: 6px;
  outline: none;
}
</style>
