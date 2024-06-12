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
    type: "text",
    content: text.value,
    ...(initData.blockId && { id: initData.blockId }),
    ...(initData.productId && { productId: initData.productId }),
  }
}

function onKeyDown(event: any) {
  if (event.code !== "Backspace") {
    return
  }

  const targetText = event.target.textContent.trim()
  if (targetText.length === 0) {
    event.preventDefault()
  }
}

function onInput(event: any) {
  text.value = event.target.innerHTML
}
</script>

<template>
  <p
    :placeholder="isEdit ? 'Введите текст' : undefined"
    :contenteditable="isEdit || undefined"
    @keydown="onKeyDown"
    @input="onInput"
    v-html="initData.content"
  ></p>
</template>

<style lang="scss" scoped></style>
