export const useProductStore = defineStore("product", () => {
  const data = reactive<any[]>([])
  const error = ref("")
  const isLoading = ref(false)

  const page = ref(1)
  const count = ref(10)
  const total = ref(0)

  const hasMore = ref(true)

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

  function $reset() {
    data.length = 0
    page.value = 1
    total.value = 0
    hasMore.value = true
  }

  async function add(productData: any) {
    console.log("test")
    isLoading.value = true

    try {
      const formData = new FormData()

      for (const [key, value] of Object.entries<any>(productData)) {
        formData.append(key, value)
      }

      const commentData = await useApiFetch<any>("products/create", {
        method: "post",
        body: formData,
      })

      console.log("commentData", commentData)

      data.push(commentData)

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
    add,
    $reset,
  }
})
