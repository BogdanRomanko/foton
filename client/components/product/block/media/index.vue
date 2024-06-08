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
  {{ media }}
</template>

<style lang="scss" scoped></style>
