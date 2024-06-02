<script setup lang="ts">
import type { IProduct } from "../../../product/[id].vue"

definePageMeta({
  layout: "admin",
  middleware: "protect-by-auth",
})

const { params } = useRoute()
const productId = parseInt(params.id as string)

const {
  pending,
  error,
  data: product,
} = await useAsyncData<IProduct>(
  async () => await useApiFetch(`products/get/${productId}`),
  {
    server: true,
  },
)
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="pending">loagind</div>
  <AdminProductForm v-else :product-data="product" type="Изменить" />
</template>

<style scoped lang="scss"></style>
