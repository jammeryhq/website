<template>
  <Layout>
    <div>
      <PageHeader title="Our Starters" summary="Below is our growing collection of Gridsome starters. Members get early-access to all our starters, before they are released to the community." />
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 pt-0 p-10">
        <article class="post p-10 bg-gray-100 rounded-md mb-10">
          <figure class="block border rounded-md overflow-hidden mb-6">
            <g-image
              src="/excelsior.jpg"
              class="w-full " />
          </figure>
          <div>
            <div class="flex items-center justify-start">
              <h2 class="font-bold text-5xl">
                Excelsior
              </h2>
              <strong class="inline-block ml-10 bg-yellow-400 ounded-md px-4 py-3">* Exclusive to Members</strong>
            </div>
            <p class="mb-5 text-2xl mt-8">
              Excelsior is our members-only exclusive utility starter that includes support for all Gridsome starters, plugins and popular NPM packages, all configured via our upcoming CLI in a minute or less.
            </p>
            <h3 class="font-bold text-4xl">
              What you can expect
            </h3>
            <ul>
              <li>Consistent layouts for all Gridsome starters (index, term, single)</li>
              <li>Quickly scaffold new projects using our CLI</li>
              <li>Built in support for Gridsome plugins (flexsearch, etc)</li>
              <li>Support for popular NPM packages</li>
              <li>Optional authentication with Firestore, Auth0</li>
              <li>Killer lighthouse scores out the box</li>
            </ul>
          </div>
        </article>
        <div>
          <div class="grid gap-10 md:grid-cols-2 xl:px-10">
            <article
              v-for="edge in $page.starters.edges"
              :key="edge.node.id"
              class="post">
              <figure class="block border mb-6">
                <g-link
                  :to="`${edge.node.path}`"
                  class="block relative rounded-md h-64 overflow-hidden">
                  <g-image :src="edge.node.thumb" class="w-full" cover />
                  <figcaption class="opacity-0 transition-all ease-in-out duration-300 text-black bg-gray-100 absolute top-0 left-0 right-0 bottom-0 w-full h-full hover:opacity-100 flex items-center justify-center">
                    <strong class="text-3xl block">{{ edge.node.title }}</strong>
                  </figcaption>
                </g-link>
              </figure>
            </article>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Starters ($page: Int) {
  starters: allStarter (filter: { published: { eq: true }, featured: { eq: false }}, page: $page, perPage: 20) @paginate {
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
        thumb
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
    title: 'Our Gridsome Starters',
    description: 'Our growing collection of starters for Gridsome',
    bodyAttrs: {
      class: 'index starters'
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
