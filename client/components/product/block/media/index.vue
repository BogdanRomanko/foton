<script setup lang="ts">
export interface IFile {
  path: string
  id: number
}

export type FileData = IFile | File

export type MediaMap = Map<string, FileData>

const { isEdit, type } = withDefaults(
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

function getData() {
  if (!media.size) return

  const idList = [...media.keys()]

  return JSON.stringify(idList)
}
</script>

<template>
  <ProductBlockMediaUpload v-if="isEdit" :multiple="type === 'slider'" />
  <ProductBlockMediaList />
</template>

<style lang="scss" scoped></style>
