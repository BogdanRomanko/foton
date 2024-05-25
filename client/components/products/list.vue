<script setup lang="ts">
const { data: products } = storeToRefs(useProductStore())
</script>

<template>
  <div class="products-section-content">
    <template v-for="product of products" :key="product.id">
      <ProductsCard
        :card-data="{ id: product.id, img: product.image, text: product.title }"
      />
    </template>
  </div>
</template>

<style lang="scss"></style>
