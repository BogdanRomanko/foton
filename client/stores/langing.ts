export interface IStaticData {
  id: number
  title: string
  content: string
}

export const useLangingStore = defineStore("langing", () => {
  const data = ref<{
    header?: {
      title: IStaticData
      advertisement: IStaticData
      info: {
        phone1: IStaticData
        phone2: IStaticData
        email: IStaticData
      }
    }
    footer?: {
      adress: {
        full: IStaticData
        min: IStaticData
      }
      info: {
        inn: IStaticData
        ogrn: IStaticData
        kpp: IStaticData
      }
    }
  }>({})
  const isLoading = ref(false)
  const error = ref("")

  async function fetch() {
    isLoading.value = true

    try {
      const res = await useApiFetch<IStaticData[]>("content/getAll")

      if (!res) {
        throw new Error("Непредвиденная ошибка. Повторите позже")
      }

      data.value = {
        header: {
          title: res[0],
          advertisement: res[1],
          info: {
            phone1: res[2],
            phone2: res[3],
            email: res[4],
          },
        },
        footer: {
          adress: {
            full: res[5],
            min: res[6],
          },
          info: {
            inn: res[7],
            ogrn: res[8],
            kpp: res[9],
          },
        },
      }
    } catch (e: any) {
      error.value = e.message ?? "Непредвиденная ошибка. Повторите позже"
      return false
    } finally {
      isLoading.value = false
    }
  }

  async function edit(data: IStaticData) {
    isLoading.value = true

    try {
      const res = await useApiFetch<IStaticData[]>("content/update", {
        method: "put",
        body: data,
      })

      if (!res) {
        throw new Error("Непредвиденная ошибка. Повторите позже")
      }
    } catch (e: any) {
      error.value = e.message ?? "Непредвиденная ошибка. Повторите позже"
      return false
    } finally {
      isLoading.value = false
    }
  }

  return { fetch, edit, data, isLoading, error }
})
