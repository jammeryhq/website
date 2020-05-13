<template>
  <Layout>
    <div class="p-6 lg:p-0 lg:w-1/2 mx-auto relative">
      <h1 class="title">
        {{ $page.post.title }}
      </h1>
      <p class="excerpt">
        {{ $page.post.excerpt }}
      </p>
      <div
        class="content"
        v-html="$page.post.content" />
      <div class="comment-form">
        <Comments />
      </div>
    </div>
  </Layout>
</template>

<script>
// Components
import Comments from '@/components/Comments'

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
        class: 'min-h-screen overflow-x-auto page'
      }
    }
  },
  components: { Comments },
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
