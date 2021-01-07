<template>
  <Layout>
    <div class="p-6 lg:p-0 relative">
      <PageHeader
        :title="$page.post.title"
        :summary="$page.post.excerpt"
        class="lg:w-full prose lg:prose-2xl mx-auto" />
      <div
        v-if="$page.post.content"
        class="prose lg:prose-2xl mx-auto"
        v-html="$page.post.content" />
      <div class="prose lg:prose-2xl mx-auto">
        <Comments />
      </div>
    </div>
  </Layout>
</template>

<script>
// Components
import Comments from '@/components/Comments'
import PageHeader from '@/components/PageHeader'

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
        class: 'post'
      }
    }
  },
  components: { Comments, PageHeader },
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
  .post .vue-expand {
    @apply bg-white p-0 text-xl
  }

  .page-header > p {
    @apply text-3xl;
  }
</style>
