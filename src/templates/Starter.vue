<template>
  <Layout>
    <div class="">
      <PageHeader
        :title="$page.starter.title"
        subtitle="Starter for Gridsome"
        :summary="$page.starter.excerpt"
        custom-class="prose lg:prose-2xl mx-auto pb-0">
        <template v-slot:page-links>
          <div
            v-if="$page.starter.availability != 5"
            class="mb-8 flex items-center justify-start mt-10 space-x-8 text-center">
            <button
              class="button button--small button-secondary focus:outline-none focus:shadow-outline focus:border-yellow-500"
              title="Show install instructions"
              @click="showInstall = !showInstall"
              @keyup="showInstall = !showInstall">
              Install
            </button>
            <a
              :href="$page.starter.demo"
              class="text-black text-2xl"
              :title="'View the ' + $page.starter.title + ' demo'">
              Demo
            </a>
            <a
              :href="$page.starter.demo"
              class="text-black text-2xl"
              :title="'View the ' + $page.starter.title + ' guide'">
              Guide
            </a>
            <a
              :href="repoUrl"
              class="text-black text-2xl"
              :title="'View the ' + $page.starter.title + ' repo on Github'">
              Github
            </a>
            <span class="text-gray-400">|</span>
            <span><strong>v{{ $page.starter.version }}</strong> (<g-link
              :to="releaseNotesUrl"
              :title="'View the ' + $page.starter.title + ' release notes'"
              class="p-0 underline">Release Notes</g-link>)</span>
          </div>
          <div
            v-if="showInstall"
            v-on-clickaway="hideInstall"
            class="absolute z-50 -mt-3 bg-yellow-200 p-8 shadow-2xl border-yellow-400 rounded-md w-1/2">
            <p class="text-xl mb-5 pr-20">
              To install <strong>{{ $page.starter.title }}</strong> using Yarn or NPM, simply copy the relevant snippet and paste it into your terminal.
            </p>
            <div class="border rounded-md bg-white px-3 py-3 w-full flex items-center justify-between">
              <span class="flex h-8 text-sm">
                <button
                  :class="{'bg-green-500':installType === 'yarn'}"
                  class="font-bold bg-gray-900 text-white rounded-md rounded-r-none px-2"
                  @click="installType = 'yarn'"
                  @keyup="installType = 'yarn'">Yarn</button>
                <button
                  :class="{'bg-green-500':installType === 'npm'}"
                  class="font-bold bg-gray-900 text-white rounded-md rounded-l-none px-2"
                  @click="installType = 'npm'"
                  @keyup="installType = 'npm'">NPM</button>
              </span>
              <input
                id="install-code"
                :value="installText"
                name="install-code"
                type="text"
                disabled
                class="shadow-inner bg-gray-100 h-8 px-2 mx-3 font-mono rounded-md text-base w-full flex-grow">
              <button
                v-clipboard:copy="installText"
                class="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full inline-flex h-8 text-sm leading-none items-center"
                title="Copy to your clipboard">
                <svg
                  class="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"><rect
                    x="9"
                    y="9"
                    width="13"
                    height="13"
                    rx="2"
                    ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                <span>Copy</span>
              </button>
            </div>
            <button
              class="absolute top-0 right-0 mt-4 mr-4 bg-red-600 text-white inline-flex items-center justify-center w-8 h-8 text-center rounded-full font-bold"
              @click.prevent="showInstall = !showInstall"
              @keyup="showInstall = !showInstall">
              &times;
            </button>
          </div>
        </template>
      </PageHeader>

      <figure class="block border rounded-md overflow-hidden mt-10 mb-20 mx-20">
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
import { mixin as clickaway } from 'vue-clickaway'

export default {
  components: {
    PageHeader
  },
  mixins: [clickaway],
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
    },
    releaseNotesUrl () {
      return '/starters/' + this.$page.starter.slug + '/release-notes'
    }
  },
  metaInfo () {
    return {
      bodyAttrs: {
        class: 'min-h-screen overflow-x-auto starter'
      }
    }
  },
  mounted () {
    const handleEscape = e => {
      if (e.code === 'Escape') this.hideInstall()
    }
    document.addEventListener('keyup', handleEscape)
    this.$once('hook:afterDestroy', () => {
      document.removeEventListener('keyup', handleEscape)
    })
  },
  methods: {
    hideInstall () {
      this.showInstall = false
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
    version
  }
  metadata {
    siteUrl
  }
}
</page-query>

<style>
.starter {
  & .install {
    @apply pb-10
  }
  & .copy img {
    @apply m-0
  }
  & .page footer a {
    @apply text-black
  }
}
</style>
