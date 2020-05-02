// Layouts
import DefaultLayout from '~/layouts/Default.vue'

// Packages
import { VueReCaptcha } from 'vue-recaptcha-v3'

// Styles
import '~/main.css'

export default function (Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Use Plugins
  Vue.use(VueReCaptcha, { siteKey: process.env.GRIDSOME_RECAPTCHA_SITE_KEY, loaderOptions: { autoHideBadge: true } })
}
