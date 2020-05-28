<template>
  <Layout>
    <div class="p-6 lg:p-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto relative">
      <div>
        <div class="flex items-center justify-start space-x-8">
          <h1 class="title">
            {{ $page.starter.title }}
          </h1>
          <a  v-if="$page.starter.availability != 5" :href="$page.starter.demo" title="View the demo" target="_blank" rel="nofollow noopener" class="inline-flex items-center button button-small button-primary">
            View Demo
            <svg role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ml-3 -mr-1 h-5 w-5"><path d="M0 0h20v20H0z" fill="none"></path><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>
          </a>
        </div>
        
        <p class="excerpt">
          {{ $page.starter.excerpt }}
        </p>
        <div class="mb-8 flex space-x-4" v-if="$page.starter.availability != 5">
          <button class="button button--small button-secondary" @click.prevent="showInstall = !showInstall"
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
        <div v-show="showInstall" class="absolute left-0 -ml-12 mt-4 bg-yellow-200 p-8 pb-4 shadow-2xl border-yellow-400 rounded-md pr-20">
          <p>To install <strong>{{ $page.starter.title }}</strong> using the Gridsome CLI, simply copy the following snippet, modify the <em>project name</em> and paste it into your terminal.</p>
          
          <p class="flex items-center">
            <!--<textarea 
              v-model="installText"
              class="bg-white overflow-hidden shadow-sm py-4 px-6 rounded-md shadown-sm block w-full h-16 leading-snug text-xl flex"></textarea>-->
            <span v-bind="copyText" class="bg-white py-3 px-4 mr-4 rounded-md shadow-md text-base">gridsome create <b contenteditable="true" class="bg-yellow-200 border-b border-dashed border-yellow-500 mx-2 rounded-sm">your-project-name</b> jammeryhq/{{ $page.starter.repo }}</span>
            <button type="button"
              title="Copy to your clipboard"
              v-clipboard:copy="copyText"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError">
              <svg id="Effect" class="w-12 h-12" enable-background="new 0 0 36 36" viewBox="0 0 36 36" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m8.377 4.167c6.917 0 11.667-3.583 15-3.583s10.333 1.916 10.333 17.249-9.417 17.583-13.083 17.583c-17.167.001-24.5-31.249-12.25-31.249z" fill="#efefef"/></g><g><path d="m22.97 7.75c-.34-.6-.98-1-1.72-1h-11.5c-1.1 0-2 .9-2 2v15.5c0 .276.057.539.159.778l-.159.222c.34.6.98 1 1.72 1h11.5c1.1 0 2-.9 2-2v-15.5c0-.276-.057-.539-.159-.778z" fill="#2fdf84"/></g><g><path d="m28.25 27.25v-14.5c0-1.105-.895-2-2-2h-11.5c-1.105 0-2 .895-2 2v14.5c0 1.105.895 2 2 2h11.5c1.105 0 2-.895 2-2z" fill="#f3f3f1"/></g><g><path d="m10 25.25.159-.222c-.102-.239-.159-.502-.159-.778v-15.5c0-1.1.9-2 2-2h-2.25c-1.1 0-2 .9-2 2v15.5c0 .276.057.539.159.778l-.159.222c.34.6.98 1 1.72 1h2.25c-.74 0-1.38-.4-1.72-1z" fill="#00b871"/></g><g><path d="m15 27.25v-14.5c0-1.105.895-2 2-2h-2.25c-1.105 0-2 .895-2 2v14.5c0 1.105.895 2 2 2h2.25c-1.105 0-2-.895-2-2z" fill="#d5dbe1"/></g><g><path d="m16.75 21.5h7.5v1.5h-7.5z"/></g><g><path d="m16.75 25.5h7.5v1.5h-7.5z"/></g><g><path d="m16.75 18h7.5v1.5h-7.5z"/></g><g><path d="m16.75 14h7.5v1.5h-7.5z"/></g><g><path d="m10.5 27h-.75c-1.517 0-2.75-1.233-2.75-2.75v-15.5c0-1.517 1.233-2.75 2.75-2.75h11.5c.98 0 1.89.528 2.373 1.38l.37.652-1.305.74-.37-.652c-.22-.389-.62-.62-1.068-.62h-11.5c-.689 0-1.25.561-1.25 1.25v15.5c0 .689.561 1.25 1.25 1.25h.75z"/></g><g><path d="m26.25 30h-11.5c-1.517 0-2.75-1.233-2.75-2.75v-14.5c0-1.517 1.233-2.75 2.75-2.75h11.5c1.517 0 2.75 1.233 2.75 2.75v14.5c0 1.517-1.233 2.75-2.75 2.75zm-11.5-18.5c-.689 0-1.25.561-1.25 1.25v14.5c0 .689.561 1.25 1.25 1.25h11.5c.689 0 1.25-.561 1.25-1.25v-14.5c0-.689-.561-1.25-1.25-1.25z"/></g><g><path d="m32 28.25c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2c-.276 0-.5.225-.5.5s.224.5.5.5.5-.225.5-.5-.224-.5-.5-.5z" fill="#a4afc1"/></g><g><path d="m7 3.467h2v1h-2z" fill="#a4afc1" transform="matrix(.707 -.707 .707 .707 -.462 6.819)"/></g><g><path d="m2.934 7.533h2v1h-2z" fill="#a4afc1" transform="matrix(.707 -.707 .707 .707 -4.528 5.135)"/></g><g><path d="m3.611 2.967h1v2h-1z" fill="#a4afc1" transform="matrix(.707 -.707 .707 .707 -1.601 4.069)"/></g></svg>
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
  methods: {
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
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
