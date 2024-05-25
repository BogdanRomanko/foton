<script setup lang="ts">
const categoryStore = useCategoryStore()
const { fetch, fetchByCategory } = useProductStore()
const selectedId = ref()

const route = useRoute()
const router = useRouter()

useAsyncData(async () => {
  await categoryStore.fetch()

  const currentCategory = route.query.category

  if (!currentCategory) return

  const category = categoryStore.data.find(
    (category) => category.title === currentCategory,
  )

  if (!category) return

  selectedId.value = category.id
})

function onSelect() {
  const category = categoryStore.data.find(
    (category) => category.id === selectedId.value,
  )

  if (!category) return

  router.push({ query: { category: category.title } })
  fetchByCategory(category.title)
}

watch(
  () => route.query.category,
  (searchTitle) => {
    if (!searchTitle) {
      selectedId.value = ""
      if (Object.keys(route.query).length > 0) return
      fetch({ isRewrite: true })
    }
  },
)
</script>

<template>
  <USelectMenu
    v-model="selectedId"
    :options="categoryStore.data"
    placeholder="Select categories"
    value-attribute="id"
    option-attribute="title"
    @close="onSelect"
  />
</template>

<style scoped></style>
