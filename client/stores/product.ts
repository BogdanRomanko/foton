import type { productFormData } from "~/components/admin/product/form/index.vue"

export const useProductStore = defineStore("product", () => {
  const data = reactive<any[]>([])
  const error = ref("")
  const isLoading = ref(false)

  const page = ref(1)
  const count = ref(10)
  const total = ref(0)

  const hasMore = ref(true)

  const categoryStore = useCategoryStore()

  interface q {
    isRewrite?: boolean
    params?: { keyword?: string; category?: string }
  }

  async function fetch({ isRewrite, params }: q = {}) {
    isLoading.value = true

    try {
      const res = await useApiFetch<any>("products/getByPage", {
        query: {
          ...params,
          page: page.value - 1,
        },
      })

      if (!res || !res[0].products) {
        error.value = "Error receiving articles. Try later"
        return
      }

      if (res[1].count) {
        total.value = res[1].count
      }

      if (isRewrite) {
        data.length = 0
      }

      data.push(...res[0].products)

      return true
    } catch (e) {
      error.value = "Unexpected error. Try later"
      return false
    } finally {
      isLoading.value = false
    }
  }

  async function fetchByTitle(substring: string) {
    isLoading.value = true

    try {
      const res = await useApiFetch<any>("products/getByTitle", {
        query: {
          title: substring,
        },
      })

      if (!res) {
        error.value = "Error receiving articles. Try later"
        return
      }

      data.length = 0

      data.push(...res)

      return true
    } catch (e) {
      error.value = "Unexpected error. Try later"
      return false
    } finally {
      isLoading.value = false
    }
  }

  async function fetchByCategory(categoryTitle: string) {
    isLoading.value = true

    await categoryStore.fetch()

    if (categoryStore.error || !categoryStore.data) {
      throw new Error("Ошибка получения списка категорий. Повторите позже")
    }

    const category = categoryStore.data.find(
      (category) => category.title === categoryTitle,
    )

    if (!category) {
      throw new Error("Выбранной категории не существует")
    }

    try {
      const res = await useApiFetch<any>("products/getByCategory", {
        query: {
          categoryId: category.id,
        },
      })

      if (!res) {
        error.value = "Error receiving articles. Try later"
        return
      }

      data.length = 0

      data.push(...res)

      return true
    } catch (e: any) {
      error.value = e.message ?? "Unexpected error. Try later"
      return false
    } finally {
      isLoading.value = false
    }
  }

  function $reset() {
    data.length = 0
    page.value = 1
    total.value = 0
    hasMore.value = true
  }

  async function add(productData: productFormData) {
    isLoading.value = true

    try {
      const formData = new FormData()

      for (const [key, value] of Object.entries<any>(productData)) {
        formData.append(key, value)
      }

      const productRes = await useApiFetch<any>("products/create", {
        method: "post",
        body: formData,
      })

      console.log("productRes", productRes)

      data.push(productRes)

      return true
    } catch (e) {
      console.log("e", e)
      error.value = ""
      return false
    } finally {
      isLoading.value = false
    }
  }

  async function edit(productData: productFormData) {
    isLoading.value = true

    try {
      const formData = new FormData()

      for (const [key, value] of Object.entries<any>(productData)) {
        formData.set(key, value)
      }

      const productRes = await useApiFetch<any>("products/update", {
        method: "put",
        body: formData,
      })

      console.log("productRes", productRes)

      data.push(productRes)

      return true
    } catch (e) {
      console.log("e", e)
      error.value = ""
      return false
    } finally {
      isLoading.value = false
    }
  }

  return {
    data,
    count,
    total,
    hasMore,
    page,
    error,
    isLoading,
    fetch,
    fetchByTitle,
    fetchByCategory,
    add,
    edit,
    $reset,
  }
})
