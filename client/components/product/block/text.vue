<script setup lang="ts">
defineExpose({
  getData,
})

const { isEdit } = withDefaults(
  defineProps<{
    isEdit?: boolean
  }>(),
  { isEdit: false },
)

const text = ref("")

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
    placeholder="Введите текст"
    :contenteditable="isEdit"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
  ></p>
</template>

<style lang="scss" scoped></style>
