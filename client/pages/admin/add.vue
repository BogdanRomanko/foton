<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "protect-by-auth",
})
</script>

<template>
  <AdminProductForm />
</template>

<style scoped lang="scss"></style>
