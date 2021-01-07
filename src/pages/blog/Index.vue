<template>
  <Layout>
    <div class="p-6 md:p-0 container mx-auto">
      <PageHeader
        title="Updates from HQ"
        summary="Where we post updates about what we're working on, new product launches and random thoughts on the JAMstack." />
      <div class="p-6 md:p-0 mt-10 mb-20 lg:w-1/2 mx-auto">
        <article
          v-for="edge in $page.blog.edges"
          :key="edge.node.id">
          <h2>
            <g-link
              :to="`${edge.node.path}`">
              {{ edge.node.title }}
            </g-link>
          </h2>
        </article>
      </div>
    </div>
  </Layout>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    PageHeader
  },
  metaInfo: {
    title: 'Blog',
    description: 'Updates from JammeryHQ',
    bodyAttrs: {
      class: 'blog index'
    }
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


