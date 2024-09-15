<script setup lang="ts">
import type { IBlockInitValue } from "../../admin/constructor/index.vue"

interface IQuouteContent {
  text: string
  author: string
}

type BlockQuouteContent = Omit<IBlockInitValue, "content"> & {
  content: IQuouteContent
}

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

const initBlockData = parseInitData()

const quoteData = reactive(initBlockData.content)

function parseInitData(): BlockQuouteContent {
  try {
    if (!initData.content) throw Error

    const quouteContent: IQuouteContent = JSON.parse(initData.content)

    const blockData: BlockQuouteContent = {
      ...initData,
      content: quouteContent,
    }

    return blockData
  } catch {
    return {
      content: {
        author: "",
        text: "",
      },
    }
  }
}

function getData() {
  if (!quoteData.text || !quoteData.author) return

  return {
    type: "quoute",
    content: JSON.stringify(quoteData),
    ...(initBlockData.blockId && { id: initBlockData.blockId }),
    ...(initBlockData.productId && { productId: initBlockData.productId }),
  }
}

function onInputText(e: Event) {
  quoteData.text = (e.target as HTMLInputElement).innerHTML
}

function onInputAuthor(e: Event) {
  quoteData.author = (e.target as HTMLInputElement).innerHTML
}
</script>

<template>
  <blockquote :class="$style.quote">
    <p
      :class="$style.text"
      :placeholder="isEdit ? 'Текст цитаты' : undefined"
      :contenteditable="isEdit || undefined"
      @input="onInputText"
      v-html="initBlockData.content.text"
    ></p>
    <p
      :class="$style.author"
      :placeholder="isEdit ? 'Подпись' : undefined"
      :contenteditable="isEdit || undefined"
      @input="onInputAuthor"
      v-html="initBlockData.content.author"
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
