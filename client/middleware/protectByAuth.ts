export default defineNuxtRouteMiddleware(() => {
  const userState = useUserStore()

  if (!userState.isAdmin) {
    return abortNavigation(
      createError({ statusCode: 404, statusMessage: "Page Not Found" }),
    )
  }
})
