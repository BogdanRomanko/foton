enum Roles {
  User = "USER",
  Admin = "ADMIN",
}

interface IUser {
  userId: number
  userName: string
  role: Roles
}

interface ITokenBody {
  payload: IUser
  iat: number
  exp: number
}

export const useUserStore = defineStore("user", () => {
  const data = ref<IUser>()
  const isAdmin = computed(() => {
    if (!data.value) return false

    return data.value.role === Roles.Admin
  })

  const isLoading = ref(false)
  const error = ref("")

  function decodeToken(token: string) {
    if (!token) return false

    try {
      const parts = token.split(".")
      const tokenBody: ITokenBody = JSON.parse(atob(parts[1]))

      if (!tokenBody || !tokenBody.payload) return false
      return tokenBody
    } catch (e) {
      return false
    }
  }

  function saveUserData(token: string) {
    const decodeData = decodeToken(token)

    if (!decodeData) return false
    data.value = decodeData.payload

    if (process.client) {
      localStorage.setItem("token", token)
    }

    return true
  }

  function $reset() {
    data.value = undefined
  }

  return {
    data,
    error,
    isAdmin,
    isLoading,
    $reset,
    decodeToken,
    saveUserData,
  }
})
