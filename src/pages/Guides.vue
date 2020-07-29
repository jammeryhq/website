<template>
  <Layout>
    <div class="prose lg:prose-2xl mx-auto">
      <PageHeader
        title="Our Guides"
        summary="Below are the setup guides for our Gridsome plugins and starters." />
      <div>
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2 pb-20">
          <!-- Plugins -->
          <div class="bg-gray-100 p-10 rounded-md hover:shadow-2xl">
            <h2>Plugins</h2>
            <p>Comprehensive setup guides for our Gridsome plugins.</p>
            <div class="relative group appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <button @click="isOpen = !isOpen" class="w-full flex items-center justify-between cursor-pointer text-sm px-4 py-4">
                Select a plugin guide
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </button>
              <div v-if="isOpen" class="shadow-2xl border text-sm items-center absolute bottom-0 rounded-lg p-1 bg-white p-2 w-full">
                <div class="grid grid-cols-1 md:grid-cols-2">
                  <g-link

                    v-for="edge in $page.plugins.edges"
                    :key="edge.node.id"
                    :to="edge.node.path"
                    class="text-black">
                    {{ edge.node.title }}
                  </g-link>
                  <button v-if="isOpen === true" @click="isOpen = !isOpen" class="absolute right-0 top-0 bg-black rounded-full h-6 w-6 text-white font-bold text-xs mr-3 mt-3">X</button>
                </div>
              </div>
            </div>
          </div>
          <!-- Starters -->
          <div class="bg-gray-100 p-10 rounded-md hover:shadow-2xl">
            <h2>Starters</h2>
            <p>Comprehensive setup guides for our Gridsome starters.</p>
            <div class="relative group appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <button @click="isOpen = !isOpen" class="w-full flex items-center justify-between cursor-pointer text-sm px-4 py-4">
                Select a starter guide
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </button>
              <div v-if="isOpen" class="shadow-2xl border text-sm items-center absolute bottom-0 rounded-lg p-1 bg-white p-2 w-full">
                <div class="grid grid-cols-1 md:grid-cols-2">
                  <g-link
                    v-for="edge in $page.starters.edges"
                    :key="edge.node.id"
                    :to="edge.node.path"
                    class="text-black">
                    {{ edge.node.title }}
                  </g-link>
                  <button v-if="isOpen === true" @click="isOpen = !isOpen" class="absolute right-0 top-0 bg-black rounded-full h-6 w-6 text-white font-bold text-xs mr-3 mt-3">X</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  plugins: allPlugin {
    edges {
      node {
        id
        title
        path
        slug
      }
    }
  }
  starters: allStarter {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
</page-query>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    PageHeader
  },
  data () {
    return {
      isOpen: false
    }
  },
  mounted () {
    const handleEscape = e => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false
      }
    }
    document.addEventListener('keydown', handleEscape)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', handleEscape)
    })
  },
  metaInfo: {
    title: 'Our Setup Guides',
    description: 'Our plugin and starter setup guides',
    bodyAttrs: {
      class: 'guides'
    }
  }
}
</script>

<style lang="scss">
  .guides {
    h1 {
      @apply mb-0
    }
    h2 {
      @apply mt-0
    }
    .page-header {
      @apply pb-10
    }
  }

    .guides footer {
      @apply absolute bottom-0
    }
    .page footer a {
        @apply text-black
    }
    .guides .prose h2 {
      @apply mt-0 mb-2
    }
    .post {
        @apply text-xl
    }
</style>
