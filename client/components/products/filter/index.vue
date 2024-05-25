<script setup lang="ts">
const router = useRouter()

function onReset() {
  router.push({ query: {} })
}
</script>

<template>
  <div class="container">
    <ProductsFilterSearch />
    <ProductsFilterCategories />
    <UButton @click="onReset">reset</UButton>
  </div>
</template>

<style scoped>
.container {
  width: 400px;
  margin: 20px auto;
}
</style>
