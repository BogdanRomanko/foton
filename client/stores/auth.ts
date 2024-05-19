interface IAuthUser {
  name: string
  password: string
}

interface IAuthRes {
  accessToken: string
  refreshToken: string
}

export const useAuthStore = defineStore("auth", () => {
  const loadingIndicator = useLoadingIndicator()
  const router = useRouter()

  const refreshToken = useCookie("JWTRefreshToken")

  const userStore = useUserStore()

  const isLoading = ref(false)
  const error = ref("")

  const isAuth = ref(false)

  async function login(userData: IAuthUser) {
    try {
      error.value = ""
      isLoading.value = true
      loadingIndicator.start()
      const res = await useApiFetch<IAuthRes>("/user/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userData.name,
          password: userData.password,
        }),
      })

      const saveStatus = userStore.saveUserData(res.accessToken)

      if (!saveStatus) {
        throw Error
      }

      isAuth.value = true
      await router.push("/")
    } catch (e: any) {
      if (e.status === 401) {
        error.value =
          "Пожалуйста, проверьте введенные данные и повторите попытку."
      } else {
        error.value =
          "Произошла непредвиденная ошибка. Пожалуйста, попробуйте еще раз позже."
      }

      setTimeout(() => (error.value = ""), 5000)
    } finally {
      loadingIndicator.finish()
      isLoading.value = false
    }
  }

  function initJWT() {
    if (!refreshToken.value) {
      return false
    }

    const saveStatus = userStore.saveUserData(refreshToken.value)
    isAuth.value = true
    return saveStatus
  }

  function refresh(accessToken: string) {
    const saveStatus = userStore.saveUserData(accessToken)

    if (!saveStatus) {
      throw Error
    }

    if (process.client) {
      localStorage.setItem("token", accessToken)
    }
  }

  function logout() {
    isAuth.value = false

    if (process.client) {
      localStorage.setItem("token", "")
    }

    userStore.$reset()
    useApiFetch("/user/logout")

    router.push("/")
  }

  return {
    error,
    isAuth,
    isLoading,
    login,
    logout,
    refresh,
    initJWT,
  }
})
