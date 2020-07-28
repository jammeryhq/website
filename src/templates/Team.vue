<template>
  <Layout>
    <div class="prose lg:prose-2xl mx-auto relative">
      <div class="flex items-start">
        <g-image
          class="image m-0 w-full h-full mr-10 block overflow-hidden"
          :src="$page.post.image" />
        <PageHeader
          :title="$page.post.title"
          :summary="$page.post.excerpt" />
      </div>

      <div>
        <a
          v-for="(link, $index) in $page.post.links"
          :key="$index"
          :href="link.url"
          :title="link.title">
          {{ link.network }}
        </a>
      </div>
      <div class="flex items-start">
        <div
          v-if="$page.post.content"
          class="content"
          v-html="$page.post.content" />
        <aside class="p-10">
          <div>
            <h2>Basics</h2>
            <ul>
              <li><strong>Date of birth:</strong><br>{{ $page.post.dob }}</li>
              <li><strong>Nationality:</strong><br>{{ $page.post.nationality }}</li>
              <li><strong>Fav food:</strong><br>{{ $page.post.favFood }}</li>
            </ul>
          </div>
          <div v-if="$page.post.skills">
            <h2>Skills</h2>
            <ul>
              <li
                v-for="skill in $page.post.skills"
                :key="skill">
                {{ skill }}
              </li>
            </ul>
          </div>

          <div v-if="$page.post.hobbies">
            <h2>Hobbies</h2>
            <ul>
              <li
                v-for="hobby in $page.post.hobbies"
                :key="hobby">
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
  .prose {
    .image {
      @apply mt-0 rounded-full overflow-hidden -ml-32;
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
