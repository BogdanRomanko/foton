<script setup lang="ts">
const productStore = useProductStore()

const router = useRouter()
const route = useRoute()

const currentPage = parseInt(route.query.page as any)

if (currentPage && currentPage > 1) productStore.page = currentPage

const { y } = useWindowScroll({ behavior: "smooth" })

watch(
  () => productStore.page,
  (page) => {
    router.push({ query: { ...route.query, page } })
    productStore.fetch({ isRewrite: true })
    y.value = 0
  },
)

await useAsyncData(
  "posts",
  async () => await productStore.fetch({ isRewrite: true }),
  {
    server: true,
  },
)
</script>

<template>
  <ProductsList />
  <div class="flex justify-center m-10">
    <UPagination
      v-model="productStore.page"
      :page-count="productStore.count"
      :total="productStore.total"
      show-last
      show-first
    />
  </div>
</template>

<style lang="scss" scoped></style>
