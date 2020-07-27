<template>
  <Layout>
    <div class="">
      <PageHeader :title="$page.starter.title" :summary="$page.starter.excerpt" customClass="prose lg:prose-2xl mx-auto pb-0" />
      <div
        v-if="$page.starter.availability != 5"
        class="mb-8 flex items-center justify-center mt-10 space-x-4 mx-auto text-center">
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
        class="install w-1/2 prose lg:prose-2xl mx-auto z-50 mt-4 bg-yellow-200 p-8 shadow-2xl border-yellow-400 rounded-md">
        <p>To install <strong>{{ $page.starter.title }}</strong> using Yarn or NPM, simply copy the relevant snippet and paste it into your terminal.</p>
        <div class="border rounded-md bg-white px-3 flex items-stretch justify-start">
          <span class="flex items-center justify-start text-sm ml-1">
            <button @click.prevent="installType = 'yarn'" :class="{'bg-green-500 text-white':installType === 'yarn'}" class="font-bold bg-gray-100 rounded-md rounded-r-none px-2">Yarn</button>
            <button @click.prevent="installType = 'npm'" :class="{'bg-green-500 text-white':installType === 'npm'}" class="font-bold bg-gray-100 rounded-md rounded-l-none px-2">NPM</button>
          </span>
          <input
            :value="installText"
            name="install-code"
            type="text"
            disabled
            class="bg-white py-3 px-4 mx-2 font-serif rounded-md text-xl w-full">
          <button
            v-clipboard:copy="installText"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            type="button"
            class="mr-1 copy justify-center self-center flex items-center h-8 w-10 block rounded-full overflow-hidden bg-black hover:bg-gray-700 focus:bg-accent text-white"
            title="Copy to your clipboard">
            <g-image
              src="/copy1.svg"
              class="block w-4 h-4" />
          </button>
        </div>
        <button
            class="absolute top-0 right-0 mt-4 mr-4 bg-black text-white inline-flex px-3 py-1 rounded-full font-bold"
            @click.prevent="showInstall = !showInstall"
            @keyup="showInstall = !showInstall">
            Close
          </button>

        
      </div>
          <figure class="block border rounded-md overflow-hidden mt-10 mb-20 w-2/3 mx-auto">
      <g-image :src="$page.starter.image" />
    </figure>
      <div
      class="prose lg:prose-2xl mx-auto mb-20"
      v-html="$page.starter.content" />
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
      bodyAttrs: {
        class: 'min-h-screen overflow-x-auto starter'
      }
    }
  },
  data: () => ({
    showInstall: false,
    installType: 'yarn'
  }),
  computed: {
    installText () {
      const repo = this.$page.starter.repo
      const type = this.installType
      return `${type} add ${repo}`
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
query($id:ID) {
  starter(id:$id){  
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
.starter .page-header {
  padding-bottom: 0;
}
.starter .install {
  @apply pb-10;
}
.starter .copy img {
  @apply m-0;
}
  .page footer a {
    @apply text-black
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
