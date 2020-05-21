<template>
  <Layout>
    <div class="p-6 lg:p-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto relative">
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

<style lang="scss">
  .page footer a {
    @apply text-black
  }
  .content {
    h2, h3, h4, h5, h6 {
      @apply font-bold my-4
    }
    h2 {
      @apply text-5xl 
    }
    h3 {
      @apply text-4xl 
    }
    h4 {
      @apply text-3xl 
    }
    h5 {
      @apply text-2xl
    }
    h6 {
      @apply text-xl
    }
    ol, ul {
      @apply my-5
    }
    li {
      @apply ml-10 text-xl leading-loose
    }
    ol li {
      @apply list-decimal
    }
    ul li {
      @apply list-disc
    }
  }
</style>
