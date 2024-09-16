export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()

  if (import.meta.server && !authStore.isAuth) {
    authStore.initJWT()
    return
  }
  const nuxtApp = useNuxtApp()
  if (
    import.meta.client &&
    authStore.isAuth &&
    nuxtApp.isHydrating &&
    nuxtApp.payload.serverRendered
  ) {
    useJWTRefesh()
  }
})
