<template>
  <Layout>
    <div>
      <PageHeader
        title="Team Jammery"
        summary="JammeryHQ is an open collaboration between three freelancers, each from vastly different backgrounds, each bringing something unique to the table." />
      <div class="pb-20 mt-10">
        <div class="grid gap-10 grid-cols-1 md:grid-cols-3 xl:w-2/3 mx-auto">
          <article
            v-for="edge in $page.plugins.edges"
            :key="edge.node.id"
            class="">
            <div class="flex items-center justify-start">
              <figure class="m-0 w-24 h-24 border-4 border-white border-solid rounded-full overflow-hidden shadow-xl">
                <g-image
                  :src="edge.node.thumb"
                  class="w-24 h-24"
                  fit="cover"
                  position="center"
                />
              </figure>
              <div class="lg:ml-3">
                <h2>
                  <g-link
                    :to="'team/' + edge.node.slug"
                    class="text-2xl font-bold p-0">
                    {{ edge.node.title }}
                  </g-link>
                </h2>
                <em class="pl-1 text-gray-900 font-normal block text-lg h-auto m-0">a.k.a. <strong>{{ edge.node.nickname }}</strong></em>
              </div>
            </div>
            <p class="mb-3 text-xl mt-6">
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
  plugins: allTeam(sortBy: "date", order: ASC)  {
    edges {
      node {
        id
        title
        slug
        excerpt
        path
        thumb
        nickname
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
    title: 'Team Jammery',
    description: '',
    bodyAttrs: {
      class: ''
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
