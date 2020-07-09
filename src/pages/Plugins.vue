<template>
  <Layout>
    <div>
      <PageHeader title="Our Plugins" summary="Below is our growing collection of Gridsome plugins. Members get early-access to all our plugins before they are released to the community." />
      <div>
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 lg:px-10 xl:w-2/3 mx-auto lg:mt-16 mb-10">
          <article
            v-for="edge in $page.starters.edges"
            :key="edge.node.id"
            class="post">
            <h2>
              <g-link
                :to="`${edge.node.path}`"
                class="text-white">
                {{ edge.node.title }}
              </g-link>
            </h2>
            <p class="mb-3 text-xl mt-6">
              {{ edge.node.excerpt }}
            </p>
            <!--<p>Availability: <strong>Level {{ edge.node.availability }}</strong></p>-->
          </article>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Starters ($page: Int) {
  starters: allPlugin (filter: { published: { eq: true }, featured: { eq: false }}, page: $page, perPage: 12) @paginate {
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
        demo
        published
        featured
        availability
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
    title: 'Our Gridsome Plugins',
    description: 'Our growing collection of plugins for Gridsome',
    bodyAttrs: {
      class: 'index plugins'
    }
  }
}
</script>

<style lang="scss">
  .page footer a {
    @apply text-black
  }
  article {
    ul {
        @apply mt-4 mb-0 ml-4 text-xl
    }
    li:before {
        content: "\2713";
        @apply text-accent font-bold text-2xl mr-2
    }
  }
</style>
