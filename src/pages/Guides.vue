<template>
  <Layout>
    <div>
      <PageHeader title="Our Guides" summary="Below are the setup guides for our Gridsome plugins and starters." />
      <div>
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2 px-6 lg:px-10 xl:w-2/3 mx-auto lg:mt-16 mb-10">
          <div>
            <h2>Plugins</h2>
            <ul class="grid gap-1 grid-cols-1 md:grid-cols-2">
                <li
                    v-for="edge in $page.plugins.edges"
                    :key="edge.node.id"
                    class="post">
                    <g-link
                        :to="edge.node.path"
                        class="text-black">
                        {{ edge.node.title }}
                    </g-link>
                </li>
            </ul>
          </div>
          <div>
            <h2>Starters</h2>
            <ul class="grid gap-1 grid-cols-1 md:grid-cols-2">
                <li
                    v-for="edge in $page.starters.edges"
                    :key="edge.node.id"
                    class="post">
                    <g-link
                        :to="edge.node.path"
                        class="text-black">
                        {{ edge.node.title }}
                    </g-link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Guides ($page: Int) {
  starters: allStarterGuide (filter: { published: { eq: true } }, page: $page, perPage: 50) @paginate {
    edges {
      node {
        id
        title
        slug
        excerpt
        path
        demo
        published
      }
    }
  }
  plugins: allPluginGuide (filter: { published: { eq: true } }, page: $page, perPage: 50) @paginate {
    edges {
      node {
        id
        title
        slug
        excerpt
        path
        demo
        published
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
  	computed: {
		// pluginGuideUrl() {
		// 	let pluginSlug = this.plugins.slug
		// 	return `https://jammeryhq.com/guides/plugins/` + pluginSlug
		// },
        // starterGuideUrl() {
		// 	let starterSlug = this.starters.slug
		// 	return `https://jammeryhq.com/guides/starters/` + starterSlug
		// }
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
    .page footer a {
        @apply text-black
    }
    
    .post {
        @apply text-xl
    }
</style>
