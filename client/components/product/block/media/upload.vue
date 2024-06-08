<script setup lang="ts">
import type { MediaMap } from "./index.vue"

const { multiple } = defineProps<{
  multiple: boolean
}>()

const media = inject<MediaMap>("media", new Map())

function removeFileList() {
  media.forEach((file) => {
    if ("id" in file) {
      useApiFetch(`/products/deleteImage/${file.id}`, {
        method: "delete",
      })
    }
  })
}

function onUploadFiles(files: FileList, multiple?: boolean) {
  if (!multiple) {
    removeFileList()
    media.clear()
  }

  Array.from(files).forEach((file) => {
    const id = randomId()

    media.set(id, file)
  })
}

onUnmounted(() => {
  // removeFileList()
})
</script>

<template>
  <UiFileUpload :multiple="multiple" @upload="onUploadFiles" />
</template>

<style lang="scss" scoped></style>
