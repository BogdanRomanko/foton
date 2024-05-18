<script setup lang="ts">
const page = ref(1)
const items = ref(Array(55))
</script>

<template>
  <section class="products-section">
    <h3>Высоковольные истоники питания</h3>
    <ProductsList />
    <div class="flex justify-center m-6">
      <UPagination v-model="page" :page-count="5" :total="items.length" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
