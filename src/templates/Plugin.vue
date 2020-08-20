<template>
  <Layout>
    <div class="prose lg:prose-2xl mx-auto">
      <PageHeader
        :title="$page.plugin.title"
        :summary="$page.plugin.excerpt" />
      <div
        v-if="$page.plugin.availability != 5"
        class="mb-8 flex space-x-4">
        <button
          class="button button--small button-secondary"
          title="Show install instructions"
          @click.prevent="showInstall = !showInstall"
          @keyup="showInstall = !showInstall">
          Install
        </button>
        <a
          :href="repoUrl"
          class="text-black text-2xl"
          title="View the repo on Github">
          Github
        </a>
      </div>
      <div
        v-show="showInstall"
        class="absolute z-50 left-0 -ml-12 mt-4 bg-yellow-200 p-8 shadow-2xl border-yellow-400 rounded-md pr-20">
        <p>To install <strong>{{ $page.plugin.title }}</strong> using Yarn or NPM, simply copy the relevant snippet and paste it into your terminal.</p>
        <p><code class="bg-white shadow-sm p-4 text-base rounded-md">yarn add {{ $page.plugin.repo }}</code> <i class="mx-5 inline-block text-sm">or</i> <code class="bg-white shadow-sm p-4 text-base rounded-md">npm install {{ $page.plugin.repo }}</code></p>
        <button
          class="absolute top-0 right-0 mt-4 mr-4 bg-black text-white inline-flex px-3 py-1 rounded-full font-bold"
          @click.prevent="showInstall = !showInstall"
          @keyup="showInstall = !showInstall">
          Close
        </button>
      </div>
      <div
        class=""
        v-html="$page.plugin.content" />
    </div>
  </Layout>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    PageHeader
  },
  metaInfo () {
    return {
      title: this.$page.plugin.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.plugin.excerpt
        },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.$page.plugin.title },
        { property: 'og:description', content: this.$page.plugin.excerpt },
        { property: 'og:url', content: this.$page.plugin.path },
        { property: 'article:published_time', content: this.$page.plugin.date },
        { name: 'twitter:title', content: this.$page.plugin.title },
        { name: 'twitter:description', content: this.$page.plugin.excerpt },
        { name: 'twitter:site', content: '@jammeryhq' },
        { name: 'twitter:creator', content: '@jammeryhq' }
      ],
      bodyAttrs: {
        class: 'min-h-screen overflow-x-auto page'
      }
    }
  },
  data: () => ({
    showInstall: false
  }),
  computed: {
    repoUrl () {
      const githubUrl = 'https://github.com/jammeryhq/'
      const repoName = this.$page.plugin.repo
      return `${githubUrl}${repoName}`
    }
  }
}
</script>

<page-query>
query($id:ID) {
  plugin(id:$id){
    title
    slug
    id
    excerpt
    content
    featured
    published
    availability
    demo
    repo
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
</style>
