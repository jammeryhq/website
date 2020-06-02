<template>
  <Layout>
    <div>
      <div class="p-6 lg:p-0 lg:w-1/2 mx-auto relative z-10">
        <h1 class="title">
          Our Plugins
        </h1>
        <p class="excerpt">
          Below is our growing collection of Gridsome plugins. Members get early-access to all our plugins before they are released to the community.
        </p>
      </div>

      <div>
        <div class="grid gap-10 grid-cols-3 px-10 w-2/3 mx-auto mt-10">
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
            <p class="mb-3 text-xl mt-5">
              <g-link
                :to="`${edge.node.path}`"
                class="text-black font-bold">
                {{ edge.node.title }} details
              </g-link>
            </p>
          </article>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Starters ($page: Int) {
  starters: allPlugin (filter: { published: { eq: true }, featured: { eq: false }}, page: $page, perPage: 6) @paginate {
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

export default {
  metaInfo: {
    title: 'Starters',
    description: 'Our growing collection of starters for Gridsome',
    bodyAttrs: {
      class: 'Gridsome Starters'
    }
  }
}
</script>

<style lang="scss">
  .page footer a {
    @apply text-black
  }
  .about footer {
    @apply absolute bottom-0
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
