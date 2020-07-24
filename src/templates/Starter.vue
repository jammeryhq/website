<template>
  <Layout>
    <div
      v-on-clickaway="hideInstall"
      class="prose lg:prose-2xl mx-auto">
        <PageHeader :title="$page.starter.title" :summary="$page.starter.excerpt" />
        
        <div
          v-if="$page.starter.availability != 5"
          class="mb-8 flex flex-wrap">
          <a
            v-if="$page.starter.availability != 5"
            :href="$page.starter.demo"
            title="View the demo"
            target="_blank"
            rel="nofollow noopener"
            class="block ml-10 hover:ml-12 transition-all ease-in-out duration-100 text-black text-2xl font-bold">
            View Demo
            &xrarr;
          </a>
          <button
            class="button button--small button-primary"
            title="Show install instructions"
            @click="showInstall = !showInstall"
            @keyup="showInstall = !showInstall">
            Install
          </button>
          <a
            :href="`https://codesandbox.io/s/github/jammeryhq/` + $page.starter.repo"
            class="button button--small"
            target="_blank"
            rel="nofollow noopener"
            title="Open in CodeSandbox">
            CodeSandbox
            <svg
              role="img"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="ml-3 -mr-1 h-5 w-5"><path
                d="M0 0h20v20H0z"
                fill="none" /><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg>
          </a>
          <a
            :href="`https://vercel.com/import/project?template=https://github.com/jammeryhq/` + $page.starter.repo"
            class="button button--small"
            target="_blank"
            rel="nofollow noopener"
            title="Deploy to Vercel">
            Vercel
            <svg
              role="img"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="ml-3 -mr-1 h-5 w-5"><path
                d="M0 0h20v20H0z"
                fill="none" /><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg>
          </a>
          <a
            :href="`https://app.netlify.com/start/deploy?repository=https://github.com/jammeryhq/` + $page.starter.repo"
            class="button button--small"
            target="_blank"
            rel="nofollow noopener"
            title="Deploy to Netlify">
            Netlify
            <svg
              role="img"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="ml-3 -mr-1 h-5 w-5"><path
                d="M0 0h20v20H0z"
                fill="none" /><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg>
          </a>
        </div>
        <div
          v-show="showInstall"
          class="absolute left-0 -ml-12 mt-4 bg-yellow-200 p-8 pb-4 shadow-2xl border-yellow-400 rounded-md pr-20"
          @keyup.esc="hideInstall">
          <p>To install <strong>{{ $page.starter.title }}</strong> using the Gridsome CLI, simply copy the following snippet, modify the <em>project name</em> and paste it into your terminal.</p>

          <p class="flex items-center">
            <label
              for="install-code"
              class="w-full">
              <input
                :value="installText"
                name="install-code"
                type="text"
                disabled
                class="bg-white py-3 px-4 mr-4 rounded-md shadow-md text-base w-full">
            </label>
            <button
              v-clipboard:copy="installText"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
              type="button"
              class="shadow-md rounded-full overflow-hidden p-3 bg-black hover:bg-gray-700 focus:bg-accent text-white"
              title="Copy to your clipboard">
              <g-image
                src="/copy1.svg"
                class="w-4 h-4" />
            </button>
          </p>
          <button
            class="absolute top-0 right-0 mt-4 mr-4 bg-black text-white inline-flex px-3 py-1 rounded-full font-bold"
            @click.prevent="showInstall = !showInstall"
            @keyup="showInstall = !showInstall">
            Close
          </button>
        </div>
    </div>
    <figure class="block border rounded-md overflow-hidden my-20 w-2/3 mx-auto">
      <g-image :src="$page.starter.image" />
    </figure>
    <div
      class="prose lg:prose-2xl mx-auto"
      v-if="$page.starter.content"
      v-html="$page.starter.content" />
  </Layout>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    PageHeader
  },
  metaInfo () {
    return {
      meta: [
        {
          key: 'description',
          name: 'description',
        },
      ],
      bodyAttrs: {
        class: 'min-h-screen overflow-x-auto page starter'
      }
    }
  },
  mixins: [clickaway],
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
  methods: {
    onCopy: function (e) {
      alert('Copied! Now paste (cmd/ctrl + v) in your terminal to install.')
    },
    onError: function (e) {
      alert('Failed to copy texts')
    },
    hideInstall () {
      this.showInstall = false
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
  .starter .button {
    @apply mr-4 mt-4
  }
  .button {
    @apply inline-flex items-center px-6 py-3 bg-gray-200 font-bold text-xl text-black rounded-full px-8;
  }
  .button-primary {
    @apply bg-accent text-black;
  }
  .button-secondary {
    @apply bg-gray-900 text-white;
  }
</style>
