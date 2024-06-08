<!-- <script setup lang="ts">
defineExpose({
  getData,
})

const { isEdit } = withDefaults(
  defineProps<{
    isEdit?: boolean
  }>(),
  { isEdit: false },
)

const files = reactive([])
provide("files", files)

function getData() {
  if (!files.length) return

  return {
    type: "slider",
    content: files,
  }
}

function getFilesListSrc() {
  return files.map((file) => getMediaSrc(file))
}
</script>

<template>
  <UiFileUpload v-if="isEdit" />
  <UCarousel
    v-if="files.length > 0"
    v-slot="{ item }"
    :items="getFilesListSrc()"
    :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }"
    arrows
    indicators
  >
    <img :src="item" width="300" height="400" draggable="false" />
  </UCarousel>
</template>

<style lang="scss" scoped></style> -->

<script setup lang="ts">
defineExpose({
  getData,
})

const { isEdit, content } = withDefaults(
  defineProps<{
    isEdit?: boolean
    content?: string[]
  }>(),
  { isEdit: false, content: () => [] },
)

const media = ref()

function getData() {
  if (!media.value) return

  return {
    type: "slider",
    content: media.value.getData(),
  }
}
</script>

<template>
  <ProductBlockMedia
    ref="media"
    type="slider"
    :is-edit="isEdit"
    :content="content"
  />
</template>

<style lang="scss" scoped></style>
