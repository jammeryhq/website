<template>
  <Layout>
    <div class="h-screen w-1/2 mx-auto">
      <h1 class="title">Blog</h1>
      <p class="excerpt">Get the latest updates about what we're thinking about, working on and more.</p>
      <article v-for="edge in $page.blog.edges" :key="edge.node.id" class="mt-6 mb-5">
          <h2 class="text-4xl font-bold mb-4 bg-black inline text-white p-3"><g-link :to="`${edge.node.path}`" class="text-white">{{ edge.node.title }}</g-link></h2>
          <p class="mb-3 text-xl mt-5">{{ edge.node.excerpt }}</p>
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