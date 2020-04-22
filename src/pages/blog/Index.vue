<template>
  <Layout>
    <h1>Blog</h1>
    <p></p>
    <hr>
    <div>
        <article v-for="edge in $page.blog.edges" :key="edge.node.id" class="mt-6 ">
            <h2 v-html="edge.node.title" />
            <p class="mb-3 text-base">{{ edge.node.excerpt }}</p>
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