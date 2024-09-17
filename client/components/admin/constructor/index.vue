<script setup lang="ts">
import type { IBlock } from "../../../pages/product/[id].vue"
import type { VueComponent } from "@/types"
import {
  ProductBlockHeader,
  ProductBlockCode,
  ProductBlockList,
  ProductBlockQuoute,
  ProductBlockText,
  ProductBlockSpace,
  ProductBlockMediaFile,
  ProductBlockMediaSlider,
} from "#components"

export interface IBlockInitValue {
  content?: string
  blockId?: number
  productId?: number
}

interface ICreateBlock {
  component: VueComponent
  initValue?: IBlockInitValue
  ref?: { getData: () => IBlock }
}

defineExpose({
  getBlocksContent,
})

const { initBlocks } = defineProps<{
  initBlocks?: IBlock[]
}>()

const errorMessage = ref("")

const blocks = new Map<string, any>([])
blocks.set("header", ProductBlockHeader)
blocks.set("text", ProductBlockText)
blocks.set("quoute", ProductBlockQuoute)
blocks.set("space", ProductBlockSpace)
blocks.set("code", ProductBlockCode)
blocks.set("list", ProductBlockList)
blocks.set("file", ProductBlockMediaFile)
blocks.set("slider", ProductBlockMediaSlider)

const blocksKeys: string[] = [...blocks.keys()]
const createdBlocks = shallowReactive<Map<string, ICreateBlock>>(new Map())

const productStore = useProductStore()

initBlocksList()
function initBlocksList() {
  if (!initBlocks) return
  initBlocks.forEach((block) =>
    selectBlock(block.type, {
      content: block.content,
      blockId: block.id,
      productId: block.productId,
    }),
  )
}

function removeBlock(key: string) {
  const block = createdBlocks.get(key)
  const blockId = block.initValue.blockId
  productStore.removeBlock(blockId)

  createdBlocks.delete(key)
}

function selectBlock(block: string, blockPropData?: IBlockInitValue) {
  const component = blocks.get(block)
  if (!component) return

  const id = randomId()

  createdBlocks.set(id, {
    component,
    ...(blockPropData && {
      initValue: {
        content: blockPropData.content,
        blockId: blockPropData.blockId,
        productId: blockPropData.productId,
      },
    }),
  })
}

const setBlockRef = (el: any, key: string) => {
  const blockComponent = createdBlocks.get(key)
  if (!blockComponent) return
  blockComponent.ref = el
}

function getBlocksContent() {
  if (!createdBlocks.size) {
    errorMessage.value = "At least 1 block must be selected"

    setTimeout(() => {
      errorMessage.value = ""
    }, 5000)

    return
  }

  const blocksData = []

  for (const block of createdBlocks.values()) {
    if (!block.ref) continue
    blocksData.push(block.ref.getData())
  }

  return JSON.stringify(blocksData)
}
</script>

<template>
  <div class="editor">
    <h2>Article body conscructor</h2>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <AdminConstructorToolbar />

    <AdminBlockComponent
      v-for="postBlock in createdBlocks.entries()"
      :key="postBlock[0]"
      :component="postBlock[1].component"
      :data-id="postBlock[0]"
      :init-content="postBlock[1].initValue"
      @remove-block="removeBlock"
      @set-block-ref="setBlockRef"
    />
    <AdminConstructorMenu :list="blocksKeys" @select="selectBlock" />
  </div>
</template>

<style lang="scss">
.editor {
  padding: 15px;
  width: 100%;
}

[placeholder]:empty::after {
  content: attr(placeholder);
  color: #555;
}

[placeholder]:empty:focus::after {
  content: "";
}
</style>
