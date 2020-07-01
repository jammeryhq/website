<template>
  <Layout>
    <div class="p-6 lg:p-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto relative">
      <div>
        <div class="flex items-center justify-start space-x-8">
          <h1 class="title">
            {{ $page.starter.title }}
          </h1>
        </div>

        <p class="excerpt">
          {{ $page.starter.excerpt }}
        </p>
        <div
          v-if="$page.starter.availability != 5"
          class="mb-8 flex space-x-4">
          <button
            class="button button--small button-secondary"
            title="Show install instructions"
            @click.prevent="showInstall = !showInstall"
            @keyup="showInstall = !showInstall">
            Install
          </button>
          <a :href="repoUrl" class="text-black text-2xl" title="View the repo on Github">
            Github
          </a>
        </div>
        <div
          v-show="showInstall"
          class="absolute z-50 left-0 -ml-12 mt-4 bg-yellow-200 p-8 shadow-2xl border-yellow-400 rounded-md pr-20">
          <p>To install <strong>{{ $page.starter.title }}</strong> using Yarn or NPM, simply copy the relevant snippet and paste it into your terminal.</p>
          <p><code class="bg-white shadow-sm p-4 text-base rounded-md">yarn add {{ $page.starter.repo }}</code> <i class="mx-5 inline-block text-sm">or</i> <code class="bg-white shadow-sm p-4 text-base rounded-md">npm install {{ $page.starter.repo }}</code></p>
          <button
            class="absolute top-0 right-0 mt-4 mr-4 bg-black text-white inline-flex px-3 py-1 rounded-full font-bold"
            @click.prevent="showInstall = !showInstall"
            @keyup="showInstall = !showInstall">
            Close
          </button>
        </div>
      </div>
    </div>
    <div
      class="content p-6 lg:p-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto"
      v-html="$page.starter.content" />
  </Layout>
</template>

<script>
// Components

export default {
  metaInfo () {
    return {
      title: this.$page.starter.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.starter.excerpt
        },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.$page.starter.title },
        { property: 'og:description', content: this.$page.starter.excerpt },
        { property: 'og:url', content: this.starterUrl },
        { property: 'article:published_time', content: this.$page.starter.date },
        { name: 'twitter:title', content: this.$page.starter.title },
        { name: 'twitter:description', content: this.$page.starter.excerpt },
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
    postUrl () {
      const siteUrl = this.$page.metadata.siteUrl
      const postPath = this.$route.fullPath
      return `${siteUrl}${postPath}`
    },
    repoUrl () {
      const githubUrl = 'https://github.com/jammeryhq/'
      const repoName = this.$page.starter.repo
      return `${githubUrl}${repoName}`
    }
  }
}
</script>

<page-query>
query Starter ($path: String) {
  starter: plugin(path: $path) {
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
  .button {
    @apply inline-flex items-center px-6 py-3 font-bold text-xl text-black border border-2 rounded-full px-8;
  }
  .button-primary {
    @apply bg-accent text-black border-accent ;
  }
  .button-secondary {
    @apply bg-gray-900 text-white border-gray-900 ;
  }
</style>
