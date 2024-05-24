<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "protect-by-auth",
})
</script>

<template>
  <ProductsPaginationList />
</template>

<style lang="scss" scoped></style>
