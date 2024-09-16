<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "protect-by-auth",
})
</script>

<template>
  <div class="admin-category">
    <h3>Категории</h3>
    <AdminCategoryAdd />
    <AdminCategoryList />
  </div>
  
</template>

<style lang="scss" scoped>
.admin-category{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
