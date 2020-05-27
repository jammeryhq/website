<template>
  <Layout>
    <div>
        <div class="p-6 lg:p-0 lg:w-1/2 mx-auto relative z-10">
            <h1 class="title">
                Our Gridsome Starters
            </h1>
            <p class="excerpt">
                Below is our growing collection of Gridsome starters. Members get early-access to all our starters, before they are released to the community.
            </p>
        </div>
        
        <div class="grid grid-cols-2 gap-6 pt-0 p-10">
            <article class="p-10 bg-gray-100 rounded-md mb-10">
                <figure class="block border rounded-md overflow-hidden mb-6">
                    <g-image src="/excelsior.jpg" class="w-full "/>
                </figure>
                <div>
                    <div class="flex items-center justify-start">
                      <h2 class="font-bold text-5xl">Excelsior</h2>
                      <strong class="inline-block ml-10 bg-yellow-400 -mt-8 rounded-md px-4 py-3">* Exclusive to Members</strong>
                    </div>
                    <p class="mb-3 text-xl -mt-2">Excelsior is our members-only exclusive utility starter that includes support for all Gridsome starters, plugins and popular NPM packages, all configured via our upcoming CLI in a minute or less.</p>
                    <h3 class="font-bold text-4xl">What you can expect</h3>
                    <ul>
                        <li>Consistent layouts for all Gridsome starters (index, term, single)</li>
                        <li>Quickly scaffold new projects using our CLI</li>
                        <li>Built in support for Gridsome plugins (flexsearch, etc)</li>
                        <li>Support for popular NPM packages</li>
                        <li>Optional authentication with Firestore, Auth0</li>
                        <li>Killer lightroom scores out the box</li>
                    </ul>
                </div>
            </article>
            <div>
                <div class="grid gap-10 grid-cols-2 px-10">
                    <article
                        v-for="edge in $page.starters.edges"
                        :key="edge.node.id">
                        <figure class="block border rounded-md overflow-hidden mb-6">
                            <g-image :src="edge.node.thumb" />
                        </figure>
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
    </div>
  </Layout>
</template>

<page-query>
query Starters ($page: Int) {
  starters: allStarter (filter: { published: { eq: true }, featured: { eq: false }}, page: $page, perPage: 6) @paginate {
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
