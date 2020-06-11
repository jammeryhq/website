<template>
  <Layout>
    <div class="min-h-screen p-6 md:p-0 lg:w-1/2 mx-auto">
      <h1 class="title">
        Blog
      </h1>
      <p class="excerpt">
        Get the latest updates about what we're thinking about, working on and more.
      </p>
      <article
        v-for="edge in $page.blog.edges"
        :key="edge.node.id"
        class="mt-6 mb-10 post">
        <h2
          :class="`${edge.node.topic}`">
          <g-link
            :to="`${edge.node.path}`"
            class="text-white inline-block p-3 text-2xl lg:text-4xl font-bold mb-4 bg-black text-white p-0">
            {{ edge.node.title }}
          </g-link>
        </h2>
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
    title: 'Blog',
    description: 'Updates from JammeryHQ'
  }
}
</script>

<page-query>
query Blog ($page: Int) {
  blog: allPost (filter: { published: { eq: true }}, page: $page, perPage: 6) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        topic
      }
    }
  }
}
</page-query>
