<script setup lang="ts">
interface IQuouteContent {
  text: string
  author: string
}

defineExpose({
  getData,
})

const { isEdit, content } = withDefaults(
  defineProps<{
    isEdit?: boolean
    content?: string
  }>(),
  {
    isEdit: false,
    content: "",
  },
)

const quouteContent: IQuouteContent = JSON.parse(content) ?? {
  author: "",
  text: "",
}

const text = ref(quouteContent.text)
const author = ref(quouteContent.author)

function getData() {
  if (!text.value || !author.value) return

  return {
    type: "quoute",
    content: JSON.stringify({
      text: text.value,
      author: author.value,
    }),
  }
}

function onInputText(e: Event) {
  text.value = (e.target as HTMLInputElement).innerHTML
}

function onInputAuthor(e: Event) {
  author.value = (e.target as HTMLInputElement).innerHTML
}
</script>

<template>
  <blockquote :class="$style.quote">
    <p
      :class="$style.text"
      :placeholder="isEdit ? 'Текст цитаты' : undefined"
      :contenteditable="isEdit || undefined"
      @input="onInputText"
      v-html="text"
    ></p>
    <p
      :class="$style.author"
      :placeholder="isEdit ? 'Подпись' : undefined"
      :contenteditable="isEdit || undefined"
      @input="onInputAuthor"
      v-html="author"
    ></p>
  </blockquote>
</template>

<style lang="scss" module>
.quote {
  padding: 15px;
  position: relative;
}

.quote ::before {
  content: "";
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 0;
  height: 100%;
  border-radius: 2px;
  border-left: 4px solid blue;
}

.quote .text {
  font-size: 28px;
  line-height: 40px;
}

.quote .author {
  margin-top: 8px;
  font-size: 15px;
  line-height: 22px;
}
</style>
