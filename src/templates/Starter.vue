<template>
  <Layout>
    <div class="p-6 lg:p-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto relative">
      <div>
        <div class="flex items-center justify-start space-x-8">
          <h1 class="title">
            {{ $page.starter.title }}
          </h1>
          <a :href="$page.starter.demo" title="View the demo" target="_blank" rel="nofollow noopener" class="button button-small button-primary">
            View Demo
          </a>
        </div>
        
        <p class="excerpt">
          {{ $page.starter.excerpt }}
        </p>
        <div class="mb-8 flex space-x-4">
          <button class="button button--small button-secondary" @click.prevent="showInstall = !showInstall"
              @keyup="showInstall = !showInstall">
            Install
          </button>
          <a href="https://codesandbox.io/s/github/thetre97/gridsome-starter-shopify" class="button button--small" target="_blank" rel="nofollow noopener">
            Open in CodeSandbox
          </a>
          <a href="https://vercel.com/import/project?template=https://github.com/thetre97/gridsome-starter-shopify" class="button button--small" target="_blank" rel="nofollow noopener">
            Deploy to Vercel
          </a>
          <a href="https://app.netlify.com/start/deploy?repository=https://github.com/thetre97/gridsome-starter-shopify" class="button button--small" target="_blank" rel="nofollow noopener">
            Deploy to Netlify
          </a>
        </div>
        <div v-show="showInstall" class="absolute left-0 -ml-12 mt-4 bg-yellow-200 p-8 shadow-2xl border-yellow-400 rounded-md pr-20">
          <p>To install {{ $page.starter.title }} using the Gridsome CLI, simply copy the following snippet, modify the project name and paste it into your terminal.</p>
          <p><code class="bg-white shadow-sm p-4 text-base rounded-md">gridsome create <b class="bg-yellow-300" contenteditable>your-project-name</b> thetre97/gridsome-starter-shopify</code></p>
          <button @click.prevent="showInstall = !showInstall" @keyup="showInstall = !showInstall" class="absolute top-0 right-0 mt-4 mr-4 bg-black text-white inline-flex px-3 py-1 rounded-full font-bold">Close</button>
        </div>
      </div>
    </div>
    <figure class="block border rounded-md overflow-hidden my-20 w-2/3 mx-auto">
        <g-image :src="$page.starter.image" />
    </figure>
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
    }
  }
}
</script>

<page-query>
query Starter ($path: String) {
  starter(path: $path) {
    title
    slug
    id
    excerpt
    content
    image
    featured
    published
    demo
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
    @apply inline-flex px-6 py-3 font-bold text-xl text-black border border-2 rounded-full px-8;
  }
  .button-primary {
    @apply bg-accent text-black border-accent ;
  }
  .button-secondary {
    @apply bg-gray-900 text-white border-gray-900 ;
  }
</style>
