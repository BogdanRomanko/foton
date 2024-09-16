<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const searchData = ref<any>(route.query.search)
const productStore = useProductStore()

function onInpitTitle() {
  if (searchData.value === undefined) return
  if (searchData.value) {
    router.push({ query: { search: searchData.value } })
    productStore.fetchByTitle(searchData.value)
  } else {
    console.log(Object.keys(route.query), Object.keys(route.query).length)
    if (!route.query.search) return

    router.push({ query: {} })
    productStore.fetch({ isRewrite: true })
  }
}

watch(searchData, useDebounceFn(onInpitTitle, 500))

watch(
  () => route.query.search,
  (searchTitle) => {
    if (!searchTitle) {
      searchData.value = ""
    }
  },
)
</script>

<template>
  <div>
    <UFormGroup label="Фильтр поиска">
      <UInput v-model="searchData" placeholder="Введите наименование..." />
    </UFormGroup>
  </div>
</template>

<style scoped></style>
