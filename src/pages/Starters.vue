<template>
  <Layout>
    <div>
      <PageHeader
        title="Our Starters"
        summary="Below is our growing collection of Gridsome starters." />
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 p-10">
        <article class="post p-10 bg-gray-100 rounded-md mb-10">
          <figure class="block border rounded-md overflow-hidden mb-6">
            <g-image
              src="/excelsior.jpg"
              class="w-full" />
          </figure>
          <div>
            <div class="flex items-center justify-start">
              <h2 class="font-bold text-5xl">
                Jello
              </h2>
            </div>
            <p class="mb-5 text-2xl mt-8">
              Jello is our utility starter and command line tool which can be used to quickly scaffold new Gridsome projects. Simply select which sources and plugins you'd like to use, follow the configuration prompts and voila. 
            </p>
            <h3 class="font-bold text-4xl">
              What you can expect
            </h3>
            <ul>
              <li>Consistent layouts for all Gridsome starters (index, term, single)</li>
              <li>Quickly scaffold new projects using our CLI</li>
              <li>Built in support for Gridsome plugins (flexsearch, etc)</li>
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
                  :to="'starters/' + edge.node.slug"
                  class="block relative rounded-md h-64 overflow-hidden">
                  <g-image
                    :src="edge.node.thumb"
                    class="w-full"
                    cover />
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
query {
  starters: allStarter {
    edges {
      node {
        id
        title
        slug
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
