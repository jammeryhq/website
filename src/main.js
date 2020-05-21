// Layouts
import DefaultLayout from '~/layouts/Default.vue'

// Plugins
import { Auth0Plugin, getInstance } from './auth'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import VueScrollTo from 'vue-scrollto'
import VueApollo, { apolloProvider } from './apollo'

// Styles
import '~/main.css'

export default function (Vue, { router, appOptions, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Use Plugins
  Vue.use(Auth0Plugin, {
    domain: process.env.GRIDSOME_AUTH0_DOMAIN,
    clientId: process.env.GRIDSOME_AUTH0_CLIENT_ID,
    scope: 'openid profile email user_metadata picture',
    audience: 'https://jammeryhq.eu.auth0.com/api/v2/',
    onRedirectCallback: appState => {
      router.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname)
    }
  })
  Vue.use(VueReCaptcha, { siteKey: process.env.GRIDSOME_RECAPTCHA_SITE_KEY, loaderOptions: { autoHideBadge: true } })
  Vue.use(VueScrollTo)
  Vue.use(VueApollo)

  // Add Vue options
  appOptions.apolloProvider = apolloProvider

  if (isClient) {
    // Handle Authenticated Routes
    router.beforeEach((to, from, next) => {
      const authService = getInstance()
      const protectedRoutes = ['/secret']

      if (!protectedRoutes.includes(to.fullPath)) return next()

      const fn = () => {
        // If the user is authenticated, continue with the route
        if (authService.isAuthenticated) return next()
        // Otherwise, log in
        authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } })
      }

      // If loading has already finished, check our auth state using `fn()`
      if (!authService.loading) return fn()

      // Watch for the loading property to change before we check isAuthenticated
      authService.$watch('loading', loading => {
        if (loading === false) return fn()
      })
    })
  }
}
