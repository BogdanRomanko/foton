<script setup lang="ts">
const { data: articles, isLoading } = storeToRefs(useProductStore())
</script>

<template>
  <div class="products-section-content">
    <template v-for="post of articles" :key="post.id">
      <ProductsCard
        :card-data="{ id: post.id, img: post.image, text: post.title }"
      />
    </template>

    <PostEmpty v-if="!isLoading && !articles.length" />
    <PostSkeletonList v-if="isLoading" />
  </div>
</template>

<style lang="scss"></style>
