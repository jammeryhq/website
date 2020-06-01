<template>
  <Layout>
    <div class="p-6 lg:p-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto relative">
      <div>
        <div class="flex items-center justify-start">
          <h1 class="title">
            {{ $page.starter.title }}
          </h1>
          <a v-if="$page.starter.availability != 5" :href="$page.starter.demo" title="View the demo" target="_blank" rel="nofollow noopener" class="block ml-10 hover:ml-12 transition-all ease-in-out duration-100 text-black text-2xl font-bold">
            View Demo
            &xrarr;
          </a>
        </div>
        
        <p class="excerpt">
          {{ $page.starter.excerpt }}
        </p>
        <div class="mb-8 flex space-x-4" v-if="$page.starter.availability != 5">
          <button class="button button--small button-primary" @click.prevent="showInstall = !showInstall"
              @keyup="showInstall = !showInstall" title="Show install instructions">
            Install
          </button>
          <a :href="`https://codesandbox.io/s/github/jammeryhq/` + $page.starter.repo" class="button button--small" target="_blank" rel="nofollow noopener" title="Open in CodeSandbox">
            CodeSandbox
            <svg role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-3 -mr-1 h-5 w-5"><path d="M0 0h20v20H0z" fill="none"></path><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>
          </a>
          <a :href="`https://vercel.com/import/project?template=https://github.com/jammeryhq/` + $page.starter.repo" class="button button--small" target="_blank" rel="nofollow noopener" title="Deploy to Vercel">
            Vercel
            <svg role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-3 -mr-1 h-5 w-5"><path d="M0 0h20v20H0z" fill="none"></path><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>
          </a>
          <a :href="`https://app.netlify.com/start/deploy?repository=https://github.com/jammeryhq/` + $page.starter.repo" class="button button--small" target="_blank" rel="nofollow noopener" title="Deploy to Netlify">
            Netlify
            <svg role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-3 -mr-1 h-5 w-5"><path d="M0 0h20v20H0z" fill="none"></path><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>
          </a>
        </div>
        <div v-on-clickaway.self="showInstall" v-on:keyup.esc="showInstall" v-show="showInstall" class="absolute left-0 -ml-12 mt-4 bg-yellow-200 p-8 pb-4 shadow-2xl border-yellow-400 rounded-md pr-20">
          <p>To install <strong>{{ $page.starter.title }}</strong> using the Gridsome CLI, simply copy the following snippet, modify the <em>project name</em> and paste it into your terminal.</p>
          
          <p class="flex items-center">
            <!--<textarea 
              v-model="installText"
              class="bg-white overflow-hidden shadow-sm py-4 px-6 rounded-md shadown-sm block w-full h-16 leading-snug text-xl flex"></textarea>-->
            <input v-model="installText" type="text" disabled class="bg-white py-3 px-4 mr-4 rounded-md shadow-md text-base w-full" />
            <button type="button"
              class="shadow-md rounded-full overflow-hidden p-3 bg-black hover:bg-gray-700 focus:bg-accent text-white"
              title="Copy to your clipboard"
              v-clipboard:copy="installText"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError">
              <g-image src="/copy1.svg" class="w-4 h-4" />
              </button>
          </p>
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
import { mixin as clickaway } from 'vue-clickaway'

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
    installText () {
      const repoName = this.$page.starter.repo
      const text = 'gridsome create your-project-name jammeryhq/'
      return `${text}${repoName}`
    }
  },
  mixins: [ clickaway ],
  methods: {
    onCopy: function (e) {
      alert('Copied! Now paste (cmd/ctrl + v) in your terminal to install.')
    },
    onError: function (e) {
      alert('Failed to copy texts')
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
