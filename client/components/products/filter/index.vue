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
    <UButton @click="onReset">Поиск</UButton>
  </div>
</template>

<style scoped>
.container {
  width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
