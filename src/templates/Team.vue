<template>
  <Layout>
    <div class="w-2/3 mx-auto relative">
      <div class="flex items-start justify-start">
        <g-image
          class="m-0 image rounded-full block overflow-hidden lg:mr-20"
          :src="$page.post.image" />
        <div class="prose lg:prose-2xl">
          <h1 class="m-0">{{$page.post.title}}</h1>
          <p class="mt-1">{{$page.post.excerpt}}</p>
          <div class="text-lg flex space-x-4">
          <strong class="px-4 py-2 text-base bg-gray-200 rounded-md">External Links </strong>
            <a
              v-for="(link, $index) in $page.post.links"
              :key="$index"
              :href="link.url"
              :title="link.title">
              {{ link.network }}
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
        title
        url
    }
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
  .image {
    @apply mt-0 rounded-full overflow-hidden -ml-32;
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
