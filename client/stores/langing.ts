export const useLangingStore = defineStore("langing", () => {
  const data = ref({
    header: {
      title: "",
      advertisement: "",
      info: {
        phone1: "",
        phone2: "",
        email: "",
      },
    },
    footer: {
      adress: {
        full: "",
        min: "",
      },
      info: {
        inn: "",
        ogrn: "",
        kpp: "",
      },
    },
  })
  const isLoading = ref(false)
  const error = ref("")

  async function fetch() {
    console.log("FETCH", process.server, process.client)
    isLoading.value = true
    const test = await $fetch(
      "https://api.fakestorejson.com/api/v1/public/orders/9638aee1f217b7e407fff540",
    )
    console.log("test", test)
    data.value = {
      header: {
        title: "ФОТОН",
        advertisement:
          "Производство и внедрение программно-аппаратных комплексов",

        info: {
          phone1: "+7(959)114-92-39",
          phone2: "+7(959)000-00-00",
          email: "foton_777@mail.ru",
        },
      },
      footer: {
        adress: {
          full: "294204, Российская Федерация, ЛНР, г. Алчевск, ул. Волочаевская, д. 3А",
          min: "г. Алчевск, ул. Волочаевская, д. 3А",
        },
        info: {
          inn: "9406004267",
          ogrn: "1229400029935",
          kpp: "940601001",
        },
      },
    }
    isLoading.value = false
  }

  return { fetch, data, isLoading, error }
})
