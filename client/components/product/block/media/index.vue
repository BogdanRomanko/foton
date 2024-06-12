<script setup lang="ts">
import type { IBlockInitValue } from "../../../admin/constructor/index.vue"

export interface IFile {
  path: string
  id: number
}

export type FileData = IFile | File

export type MediaMap = Map<string, FileData>

export type BlockMediaContent = Omit<IBlockInitValue, "content"> & {
  content: string[]
}

const { isEdit, type, content } = withDefaults(
  defineProps<{
    isEdit?: boolean
    type: "file" | "slider"
    content?: string[]
  }>(),
  { isEdit: false, type: "file", content: () => [] },
)

defineExpose({
  getData,
})

const media = reactive<MediaMap>(new Map())
provide("media", media)

if (content && content.length > 0) {
  content.forEach((filePath: string) => {
    const key = randomId()

    media.set(key, { path: filePath, id: 0 })
  })
}

function getData() {
  if (!media.size) return

  const filesList = [...media.values()]

  const pathList = filesList.reduce((list: string[], file: FileData) => {
    if ("path" in file) {
      list.push(file.path)
    }

    return list
  }, [])

  return JSON.stringify(pathList)
}
</script>

<template>
  <ProductBlockMediaUpload v-if="isEdit" :multiple="type === 'slider'" />
  <ProductBlockMediaList />
</template>

<style lang="scss" scoped></style>
