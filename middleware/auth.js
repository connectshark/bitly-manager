export default defineNuxtRouteMiddleware((to, from) => {
  const token = useAccessToken()
  if (token.value === '' || token.value === undefined) {
    return navigateTo('/login')
  }
})