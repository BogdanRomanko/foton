<script setup lang="ts">
defineExpose({
  getData,
})

const { isEdit, content } = withDefaults(
  defineProps<{
    isEdit?: boolean
    content?: string
  }>(),
  { isEdit: false, content: "" },
)

const text = ref(content)

function getData() {
  if (!text.value) return

  return {
    type: "text",
    content: text.value,
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

function onKeyUp(event: any) {
  text.value = event.target.innerHTML
}
</script>

<template>
  <p
    :placeholder="isEdit ? 'Введите текст' : undefined"
    :contenteditable="isEdit || undefined"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
    v-html="content"
  ></p>
</template>

<style lang="scss" scoped></style>
