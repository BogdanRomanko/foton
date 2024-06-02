<script setup lang="ts">
import type { IFile } from "./upload.vue"

const { isEdit } = withDefaults(
  defineProps<{
    isEdit?: boolean
  }>(),
  { isEdit: false },
)

defineExpose({
  getData,
})

const media = reactive<IFile[]>([])
provide("media", media)

function getData() {
  if (!media.length) return

  const idList = media.map((file) => file.id)

  return {
    type: "media",
    content: idList,
  }
}
</script>

<template>
  <AdminBlockMediaUpload v-if="isEdit" />
  <AdminBlockMediaList />
</template>

<style lang="scss" scoped></style>
