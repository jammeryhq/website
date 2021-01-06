// Layouts
import DefaultLayout from '~/layouts/Default.vue'

// Packages
import { VueReCaptcha } from 'vue-recaptcha-v3'
import VueScrollTo from 'vue-scrollto'
import VueClipboard from 'vue-clipboard2'
import VueStorage from 'vuestorage'

// Styles
import './main.scss'

export default function (Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Use Plugins
  Vue.use(VueReCaptcha, { siteKey: process.env.GRIDSOME_RECAPTCHA_SITE_KEY, loaderOptions: { autoHideBadge: true } })
  Vue.use(VueScrollTo)
  Vue.use(VueClipboard)
  Vue.use(VueStorage)
}
