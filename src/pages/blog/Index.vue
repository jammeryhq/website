<template>
  <Layout>
    <div class="min-h-screen p-6 md:p-0">
      <PageHeader
        title="Blog"
        summary="Get the latest updates about what we're thinking about, working on and more." />
      <div class="prose lg:prose-2xl mx-auto">
        <article
          v-for="edge in $page.blog.edges"
          :key="edge.node.id"
          class="mt-6 mb-10 post">
          <h2
            class="text-2xl lg:text-4xl font-bold mb-4 bg-black inline text-white p-3"
            :class="`${edge.node.topic}`">
            <g-link
              :to="`${edge.node.path}`"
              class="text-white">
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
      class: 'blog'
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

<style lang="scss">
  .blog {
    .post {
      h2 {
        @apply rounded-md;
        a {
          @apply text-white no-underline;
        }
      }
    }
  }
</style>
