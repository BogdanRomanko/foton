<script setup lang="ts">
const categoryStore = useCategoryStore()

useAsyncData(() => categoryStore.fetch())

onUnmounted(() => {
  categoryStore.$reset()
})
</script>

<template>
  <p>{{ categoryStore.isLoading }}</p>
  <p>{{ categoryStore.error }}</p>
  <AdminCategoryItem
    v-for="item of categoryStore.data"
    :id="item.id"
    :key="item.id"
    :title="item.title"
  />
</template>

<style lang="scss" scoped></style>
