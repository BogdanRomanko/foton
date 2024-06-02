<script setup lang="ts">
export interface IBlock {
  type: string
  content: any
}

export interface IProduct {
  id: number
  title: string
  description: string
  image: string
  categoryId: number
  blocks: IBlock[]
}

const url = import.meta.env.VITE_API

const { params } = useRoute()
const productId = params.id as string

provide("productId", productId)

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
  {{ pending }}
  {{ error }}
  <ProductsNotFount v-if="!product" :id="productId" />

  <div v-else class="product">
    <ProductHeader />
    <h2 class="product-header">{{ product.title }}</h2>
    <div class="product-image">
      <img :src="`${url}/${product.image}`" alt="ВИП" />
    </div>
    <p>
      {{ product.description }}
    </p>

    <ProductBlocks :blocks="product.blocks" />
  </div>
</template>

<style lang="scss" scoped>
.product {
  justify-content: center;
  max-width: 1200px;
  width: 95%;
  margin: 0px auto;
  flex-grow: 1;

  &-header {
    text-align: center;
  }

  &-image {
    text-align: center;
    img {
      max-width: 90%;
      margin: 0px auto;
    }
  }
}
</style>
