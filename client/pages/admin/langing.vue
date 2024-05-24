<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "protect-by-auth",
})

const langingStore = useLangingStore()
await useAsyncData("langing", () => langingStore.fetch(), {
  server: true,
})
</script>

<template>
  <AdminLandingList />
</template>

<style lang="scss" scoped></style>
