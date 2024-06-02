<script setup lang="ts">
export interface IFile {
  authorId: string
  fileName: string
  id: string
  mimetype: string
}
const media = inject<IFile[]>("media", [])

function removeFileList() {
  // TODO: Remove files
  // media.forEach((file) =>
  //   useApiFetch(`/file/delete/${file.id}`, {
  //     method: "delete",
  //   }),
  // )
}

async function onUploadFiles(files: FileList, multiple?: boolean) {
  const formData = new FormData()
  Array.from(files).forEach((file) => formData.append("image", file))

  const res = await useApiFetch<IFile[]>("/products/saveImages", {
    method: "post",
    body: formData,
  })

  if (!res || !Array.isArray(res)) return

  if (!multiple) {
    removeFileList()
    media.length = 0
  }

  media.push(...res)
}

onUnmounted(() => {
  removeFileList()
})
</script>

<template>
  <UiFileUpload @upload="onUploadFiles" />
</template>

<style lang="scss" scoped></style>
