<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "protect-by-auth",
})
</script>

<template>
  <div>category</div>
  <AdminCategoryAdd />
  <AdminCategoryList />
</template>

<style lang="scss" scoped></style>
