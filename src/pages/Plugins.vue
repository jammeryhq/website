<template>
  <Layout>
    <div>
      <PageHeader
        title="Our Plugins"
        summary="Below is our growing collection of Gridsome plugins. Members get early-access to all our plugins before they are released to the community." />
      <div>
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 lg:px-10 xl:w-2/3 mx-auto lg:mt-16 mb-10">
          <article
            v-for="edge in $page.plugins.edges"
            :key="edge.node.id"
            class="post">
            <h2>
              <g-link
                :to="'plugins/' + edge.node.slug"
                class="text-white">
                {{ edge.node.title }}
              </g-link>
            </h2>
            <div class="mt-2 flex justify-start items-center">
              <span v-if="edge.node.type" class="py-1 px-2 rounded-md mr-4 inline-block" :class="edge.node.type">{{ edge.node.type }}</span>
              <g-link v-if="edge.node.guide" :to="'/plugins/'+ edge.node.slug" class="mr-4">Guide</g-link>
              <g-link :to="'https://github.com/jammeryhq/'+ edge.node.repo" v-if="edge.node.repo" class="mr-4">Repo</g-link>
              <span v-if="edge.node.version" class="text-gray-700">v{{ edge.node.version }}</span>
            </div>
            <p class="mb-3 text-xl mt-4">
              {{ edge.node.excerpt }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  plugins: allPlugin(sortBy: "title", order: ASC)  {
    edges {
      node {
        id
        title
        slug
        type
        excerpt
        path
        demo
        thumb
        repo
        published
        featured
        availability
        version
        guide {
          content
        }
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

<style>
  .page footer a {
    @apply text-black
  }
  .remark {
    @apply bg-orange-300;
  }
  .plugin {
    @apply bg-blue-300;
  }
  .source {
    @apply bg-green-300;
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
