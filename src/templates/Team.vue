<template>
  <Layout>
    <div class="w-2/3 mx-auto relative">
      <div class="flex items-start justify-start">
        <figure class="image relative">
          <svg class="image-blob" viewBox="0 0 195 240" xmlns="http://www.w3.org/2000/svg"><path fill="#00d084" d="M134.1 46c13.6 2.8 30.6 4.9 40 13.7 9.5 8.9 11.5 24.6 5.8 37-5.7 12.4-19.1 21.6-30 27.9-11 6.4-19.4 9.9-27.3 21.4-7.9 11.5-15.3 30.8-25.6 36-10.4 5.3-23.7-3.6-28.4-17-4.7-13.3-.8-31-9.7-42.6-8.9-11.6-30.7-17-32.9-23.7C23.7 92 41 84 48.3 69.6c7.3-14.4 4.6-35.1 11.6-41.8 6.9-6.7 23.5.5 36.9 6 13.4 5.5 23.7 9.3 37.3 12.2z"/></svg>
          <g-image
            class="w-full"
            :src="$page.post.image" />
        </figure>
        <div class="prose lg:prose-2xl">
          <h1 class="m-0">{{$page.post.title}}</h1>
          <p class="mt-1 mb-0">{{$page.post.excerpt}}</p>
          <div class="text-lg flex items-center justify-start space-x-4">
            <a
              v-for="(link, $index) in $page.post.links"
              :key="$index"
              :href="link.url"
              :title="link.network"
              class="opacity-25 hover:opacity-75 w-6 h-6">
              <span v-if="link.network == 'Twitter'" class="w-6 h-6 block">
                <g-image src="/twitter.svg" /> 
              </span>
              <span v-if="link.network == 'Instagram'" class="w-6 h-6 block">
                <g-image src="/instagram.svg" /> 
              </span>
              <span v-if="link.network == 'Github'" class="w-6 h-6 block">
                <g-image src="/github.svg" /> 
              </span>
              <span v-if="link.network == 'Linkedin'" class="w-6 h-6 block">
                <g-image src="/linkedin.svg" /> 
              </span>
              <span v-if="link.network == 'Youtube'" class="w-6 h-6 block">
                <g-image src="/youtube.svg" /> 
              </span>
              <span v-if="link.network == 'Website'" class="w-6 h-6 block">
                <g-image src="/website.svg" /> 
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="flex items-start">
        <div
          v-if="$page.post.content"
          class="prose lg:prose-2xl text-black"
          v-html="$page.post.content" />
          <aside class="p-10 bg-gray-200 lg:ml-20 rounded-md whitespace-no-wrap">
            <div>
              <h2 class="text-2xl m-0">Basics</h2>
              <ul class="mt-3 flex flex-col space-y-3">
                <li><strong>Date of birth:</strong><br>{{ $page.post.dob }}</li>
                <li><strong>Nationality:</strong><br>{{ $page.post.nationality }}</li>
                <li><strong>Fav food:</strong><br>{{ $page.post.favFood }}</li>
              </ul>
            </div>
            <div class="my-6" v-if="$page.post.skills">
              <h2 class="text-2xl m-0">Skills</h2>
              <ul class="mt-3">
                <li
                  v-for="skill in $page.post.skills"
                  :key="skill"
                  class="whitespace-preline">
                  {{ skill }}
                </li>
              </ul>
            </div>

            <div v-if="$page.post.hobbies">
              <h2 class="text-2xl m-0">Hobbies</h2>
              <ul class="mt-3 whitespace-preline w-full">
                <li
                  v-for="hobby in $page.post.hobbies"
                  :key="hobby"
                  class="">
                  {{ hobby }}
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
  </Layout>
</template>

<script>
// Components
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
        class: 'min-h-screen overflow-x-auto page'
      }
    }
  },
  components: { PageHeader },
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
query Team ($path: String) {
  post: team(path: $path) {
    title
    slug
    id
    excerpt
    content
    nationality
    favFood
    image
    dob
    hobbies
    skills
    image
    links {
        network
        url
    }
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
  .image {
    @apply mt-0 -ml-32 mr-20;
    width: 300px;
    & img {
      @apply relative z-30 rounded-full overflow-hidden border-8 border-white;
    }
    & .image-blob {
      @apply absolute z-20;
      width: 450px;
      top: -50px;
      left: -100px;
    }
  }
  .prose {
    h1 {
      @apply m-0
    }
    aside {
      @apply pl-10 w-full bg-gray-100 py-10 rounded-md ml-20 -mt-10;

      h2 {
        @apply text-2xl;
      }
      h2:first-of-type {
        @apply mt-0;
      }
      li {
        @apply text-lg;
      }
    }
  }
</style>
