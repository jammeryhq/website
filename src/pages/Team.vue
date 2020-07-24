<template>
  <Layout>
    <div>
      <PageHeader title="Team Jammery" summary="Jammery is an open collaboration between four freelancers, each from vastly different backgrounds, each bringing something unique to the table." />
      <div>
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2 xl:w-2/3 mx-auto">
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
      class: 'index team'
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
