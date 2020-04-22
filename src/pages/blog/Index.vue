<template>
  <Layout>
    <div class="h-screen w-1/2 mx-auto">
      <h1 class="title">Blog</h1>
      <p class="excerpt">Get the latest updates about what we're thinking about, working on and more.</p>
      <article v-for="edge in $page.blog.edges" :key="edge.node.id" class="mt-6 ">
          <h2 class="text-4xl font-bold mb-4" v-html="edge.node.title" />
          <p class="mb-3 text-xl">{{ edge.node.excerpt }}</p>
          <p><g-link :to="`${edge.node.path}`" class="btn btn-large btn-secondary">Continue reading</g-link></p>
      </article>
    </div>
  </Layout>
</template>

<script>
// import Hero from '@/components/Hero'

export default {
  components: {
    // Hero
  },
  metaInfo: {
    title: ''
  }
}
</script>

<page-query>
	query Blog ($page: Int) {
		blog: allPost (page: $page, perPage: 6) @paginate {
			totalCount
			pageInfo {
				totalPages
				currentPage
			}
			edges {
				node {
					id
					title
					excerpt
					path
				}
			}
		}
	}
</page-query>