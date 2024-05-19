interface ICategory {
  id: number
  title: string
}

export const useCategoryStore = defineStore("category", () => {
  const isLoading = ref(false)
  const error = ref("")
  const data = reactive<ICategory[]>([])

  function $reset() {
    isLoading.value = false
    error.value = ""
    data.length = 0
  }

  async function fetch() {
    if (data.length) return

    isLoading.value = true

    try {
      const res = await useApiFetch<ICategory[]>("categories/getAll")

      data.push(...res)
      return true
    } catch (e) {
      error.value = ""
      return false
    } finally {
      isLoading.value = false
    }
  }

  async function add(categoryData: { title: string }) {
    isLoading.value = true

    try {
      const commentData = await useApiFetch<ICategory>("categories/create", {
        method: "post",
        body: { ...categoryData },
      })

      data.push(commentData)

      return true
    } catch (e) {
      error.value = ""
      return false
    } finally {
      isLoading.value = false
    }
  }

  async function update(categoryData: { id: number; title: string }) {
    isLoading.value = true

    try {
      const commentData = await useApiFetch<ICategory>("categories/update", {
        method: "put",
        body: { ...categoryData },
      })

      if (!commentData)
        throw new Error(
          "Ошибка при обновлении названия категории. Повторите позже",
        )

      for (const item of data) {
        if (item.id !== categoryData.id) continue

        item.title = categoryData.title
        break
      }

      return true
    } catch (e: any) {
      error.value = e.message
      return false
    } finally {
      isLoading.value = false
    }
  }

  async function remove(id: number) {
    isLoading.value = true

    try {
      const commentData = await useApiFetch<ICategory>("categories/delete", {
        method: "delete",
        query: { id },
      })

      if (!commentData)
        throw new Error(
          "Ошибка при удалении названия категории. Повторите позже",
        )

      data.forEach((item, index) => {
        if (item.id === id) {
          data.splice(index, 1)
        }
      })

      return true
    } catch (e) {
      error.value = ""
      return false
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,
    data,
    add,
    fetch,
    $reset,
    update,
    remove,
  }
})
