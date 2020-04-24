// Layouts
import DefaultLayout from '~/layouts/Default.vue'

// Styles
import '~/main.css'

export default function (Vue) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
