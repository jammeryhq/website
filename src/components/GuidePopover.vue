<template>
  <div class="bg-gray-100 p-10 rounded-md hover:shadow-2xl relative prose lg:prose-2xl mx-auto">
    <h2
      v-if="title != ''"
      class="title">
      {{ title }}
    </h2>
    <p
      v-if="summary != ''"
      class="summary">
      {{ summary }}
    </p>
    <div class="relative group appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
      <button
        class="w-full flex items-center justify-between cursor-pointer text-sm px-4 py-4"
        @click="isOpen = !isOpen"
        @keyup="isOpen = !isOpen">
        Select a {{ type }} guide
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </button>
      <div
        v-if="isOpen"
        v-on-clickaway="hideGuideDropdown"
        class="z-50 shadow-2xl border text-sm items-center absolute bottom-0 rounded-lg p-5 bg-white w-full">
        <div class="">
          <div v-if="type === 'plugins'" class="grid grid-gap-1 grid-cols-1 md:grid-cols-2">
            <g-link
              v-for="edge in $page.plugins.edges"
              :key="edge.node.id"
              :to="'guides/plugins/'+edge.node.slug"
              class="text-black block p-2">
              {{ edge.node.title }}
            </g-link>
          </div>
          <div v-if="type === 'starters'" class="grid grid-gap-1 grid-cols-1 md:grid-cols-2">
            <g-link
              v-for="edge in $page.starters.edges"
              :key="edge.node.id"
              :to="'guides/starters/'+edge.node.slug"
              class="text-black block p-2">
              {{ edge.node.title }}
            </g-link>
          </div>
          <button
            v-if="isOpen === true"
            class="absolute right-0 top-0 bg-black rounded-full h-6 w-6 text-white font-bold text-xs mr-3 mt-3"
            @click="isOpen = !isOpen"
            @keyup="isOpen = !isOpen">
            &times;
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="isOpen === true"
      class="z-30 bg-gray-500 opacity-25 w-full h-full absolute top-0 left-0 right-0 bottom-0" />
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [clickaway],
  props: {
    title: {
      type: String,
      default: ''
    },
    summary: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  mounted () {
    const handleEscape = e => {
      if (e.code === 'Escape') this.hideGuideDropdown()
    }
    document.addEventListener('keyup', handleEscape)
    this.$once('hook:afterDestroy', () => {
      document.removeEventListener('keyup', handleEscape)
    })
  },
  methods: {
    hideGuideDropdown () {
      this.isOpen = false
    }
  }
}
</script>

<style>

</style>
