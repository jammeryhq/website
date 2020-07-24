<template>
  <Layout>
    <div class="prose lg:prose-2xl mx-auto">
      <PageHeader title="Our Guides" summary="Below are the setup guides for our Gridsome plugins and starters." />
      <div>
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2">
          <div class="bg-gray-100 p-10 rounded-md hover:shadow-2xl">
            <h2>Plugins</h2>
            <p>Comprehensive setup guides for our Gridsome plugins.</p>
            <div class="inline-block relative w-full">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option value="">Select a plugin guide</option>
                  <option
                    v-for="edge in $page.plugins.edges"
                    :key="edge.node.id"
                    class="post">
                    <!--<g-link
                        :to="'guides/plugins/'+edge.node.slug"
                        class="text-black">-->
                        {{ edge.node.title }}
                    <!--</g-link>-->
                </option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div class="bg-gray-100 p-10 rounded-md hover:shadow-2xl">
            <h2 class="mt-0">Starters</h2>
            <p>Comprehensive setup guides for our Gridsome starters.</p>
            <div class="inline-block relative w-full">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Select a starter guide</option>
                <option
                    v-for="edge in $page.starters.edges"
                    :key="edge.node.id"
                    class="post">
                        {{ edge.node.title }}
                </option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
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
