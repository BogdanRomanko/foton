<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "protect-by-auth",
})

const { params } = useRoute()
const productId = parseInt(params.id as string)

interface IProduct {
  id: number
  title: string
  description: string
  image: string
  categoryId: number
}

const {
  pending,
  error,
  data: product,
} = await useAsyncData<IProduct>(
  `post/${productId}`,
  async () => await useApiFetch(`products/get/${params.id}`),
  {
    server: true,
  },
)
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="pending">loagind</div>
  <AdminProductForm
    v-else
    :id="productId"
    :title="product?.title"
    :description="product?.description"
    :category-id="product?.categoryId"
    :image="product?.image"
    type="Изменить"
  />
</template>

<style scoped lang="scss"></style>
