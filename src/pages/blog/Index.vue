<template>
  <Layout>
    <div class="min-h-screen p-6 md:p-0">
      <PageHeader
        title="Updates from HQ"
        summary="Where we post updates about what we're working on, new product launches and random thoughts on the JAMstack." />
      <div class="prose lg:prose-2xl mx-auto mt-10">
        <article
          v-for="edge in $page.blog.edges"
          :key="edge.node.id"
          class="post">
          <h2
            class="text-2xl lg:text-4xl font-bold bg-black inline text-white p-3 mb-0"
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

<style>
  .blog {
    .post {
      @apply pb-0;
      h2 {
        @apply rounded-md mt-6;
        a {
          @apply text-white no-underline;
        }
      }
    }
  }
</style>
