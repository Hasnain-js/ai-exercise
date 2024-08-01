export default defineNuxtRouteMiddleware(() => {
  const authenticated = useUserStore().isAuthenticated

  // isAuthenticated() is an example method verifying if a user is authenticated
    if (!authenticated) {
      eraseCookie("access_token");
      useUserStore().eraseUserData();
      return navigateTo("/auth/signin");
    }
});
