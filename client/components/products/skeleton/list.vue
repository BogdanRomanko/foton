<script setup lang="ts"></script>

<template>
  <div class="products">
    <div class="products-section-content">
      <ProductsSkeletonCard v-for="item of 10" :key="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
