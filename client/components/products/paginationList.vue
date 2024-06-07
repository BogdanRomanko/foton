<script setup lang="ts">
const productStore = useProductStore()

const router = useRouter()
const route = useRoute()

const currentPage = parseInt(route.query.page as any)

if (currentPage && currentPage > 1) productStore.page = currentPage

const { y } = useWindowScroll({ behavior: "smooth" })
const { data: products, isLoading } = storeToRefs(useProductStore())

watch(
  () => productStore.page,
  (page) => {
    router.push({ query: { ...route.query, page } })
    productStore.fetch({ isRewrite: true })
    y.value = 0
  },
)

await useAsyncData(async () => {
  if (route.query.search) {
    await productStore.fetchByTitle(route.query.search as string)
  } else if (route.query.category) {
    await productStore.fetchByCategory(route.query.category as string)
  } else {
    await productStore.fetch({ isRewrite: true })
  }
})
</script>

<template>
  <ProductsFilter />
  <ProductsEmpty v-if="!isLoading && !products.length" />
  <ProductsSkeletonList v-else-if="isLoading" />
  <div v-else class="products">
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
  </div>
</template>

<style lang="scss">
.products {
  flex-grow: 1;
  width: 100vw;
  text-align: center;

  &-section {
    display: flex;
    flex-direction: column;
    padding: 10px 5vw;

    h3 {
      text-align: center;
    }

    &-content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
      text-align: center;
      justify-content: center;
      max-width: 1200px;
      margin: 0px auto;

      &-card {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        height: 300px;
        background-color: #001bb138;
        border-radius: 10px;
        gap: 10px;
        overflow: hidden;

        img {
          max-height: 150px;
          width: 100%;
          object-fit: contain;
        }

        span {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* number of lines to show */
          line-clamp: 5;
          -webkit-box-orient: vertical;
          flex-grow: 1;
          margin: 5px;
        }

        a,
        a:link,
        a:visited {
          color: black;
          text-align: center;
          background-color: white;
          border-radius: 10px;
          padding: 10px;
          text-decoration: none;
          transition: 1s background-color;
          margin: 10px;
        }

        a:hover {
          color: white;
          background-color: rgb(127, 136, 255);
        }
      }
    }
  }

  &-section:nth-child(even) {
    background-color: #ebedff;
  }
}
</style>
