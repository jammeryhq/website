<template>
  <Layout>
    <div class="p-6 lg:p-0 lg:w-1/2 mx-auto relative z-10">
      <h1 class="title">
        {{ $page.post.title }}
      </h1>
      <p class="excerpt">
        {{ $page.post.excerpt }}
      </p>
      <div
        class="content"
        v-html="$page.post.content" />
      <div class="comment-form bg-gray-100 rounded-md p-10 mt-10 -mx-20">
        <h2 class="text-4xl font-bold mb-4">
          Join the Conversation
        </h2>
        <div id="commento" />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.post.excerpt
        },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.$page.post.title },
        { property: 'og:description', content: this.$page.post.excerpt },
        { property: 'og:url', content: this.postUrl },
        { property: 'article:published_time', content: this.$page.post.date },
        { name: 'twitter:title', content: this.$page.post.title },
        { name: 'twitter:description', content: this.$page.post.excerpt },
        { name: 'twitter:site', content: '@jammeryhq' },
        { name: 'twitter:creator', content: '@jammeryhq' }
      ],
      bodyAttrs: {
        class: 'h-screen overflow-x-auto page'
      },
      script: [
        { src: `${process.env.GRIDSOME_COMMENTO_DOMAIN}/js/commento.js`, defer: true }
      ]
    }
  },
  computed: {
    postUrl () {
      const siteUrl = this.$page.metadata.siteUrl
      const postPath = this.$route.fullPath
      return `${siteUrl}${postPath}`
    }
  }
}
</script>

<page-query>
query Post ($path: String) {
  post(path: $path) {
    title
    slug
    id
    excerpt
    content
  }
  metadata {
    siteUrl
  }
}
</page-query>

<style>
  .page footer a {
    @apply text-black
  }
</style>
