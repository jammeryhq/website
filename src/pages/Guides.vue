<template>
  <Layout>
    <div>
      <PageHeader
        title="Our Guides"
        summary="Below are the setup guides for our Gridsome plugins and starters." />
      <div>
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2 pb-1s0 w-3/4 mx-auto">
          <GuidePopover
            title="Plugins"
            summary="Comprehensive setup guides for our Gridsome plugins."
            type="plugins" />
          <GuidePopover
            title="Starters"
            summary="Comprehensive setup guides for our Gridsome starters."
            type="starters" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  plugins: allPlugin {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
  starters: allStarter {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
</page-query>

<script>
import PageHeader from '@/components/PageHeader'
import GuidePopover from '@/components/GuidePopover'

export default {
  components: {
    PageHeader,
    GuidePopover
  },
  metaInfo: {
    title: 'Our Setup Guides',
    description: 'Our plugin and starter setup guides',
    bodyAttrs: {
      class: 'guides'
    }
  }
}
</script>

<style lang="scss">
  .guides {
    & h1 {
      @apply mb-0
    }
    & h2 {
      @apply mt-0
    }
    & .page-header {
      @apply pb-10
    }
    & .prose {
      @apply pb-12;

      & h2 {
       @apply mt-0 mb-2
      }
    }
    & footer {
      @apply absolute bottom-0
    }
  }

    .page footer a {
        @apply text-black
    }
    .guides .prose 
    .post {
        @apply text-xl
    }
</style>
