<template>
  <Layout>
    <div class="p-6 lg:p-0 w-full mx-auto relative">
      <div class="prose lg:prose-2xl mx-auto">
        <div class="guide-content">
          <h1 class="mb-0">
            {{ $page.record.title }} Starter
          </h1>
          <h2>Setup Guide</h2>
          <div class="flex items-start justify-between w-full">
            <p
              v-if="$page.record.excerpt"
              class="w-4/6 mt-0 excerpt">
              {{ $page.record.excerpt }}
            </p>
            <div class="w-2/6 relative">
              <nav class="links relative z-20 flex flex-col -mt-1 items-center text-sm text-white font-bold">
                <g-link :to="`${$page.record.path}`">
                  Plugin Details
                </g-link>
                <a :href="$page.record.demo">View Demo</a>
                <a :href="'https://github.com/jammeryhq/' + $page.record.repo">Github Repo</a>
                <g-link :to="`${$page.record.path}`">
                  Release Notes
                </g-link>
              </nav>
              <Blob />
            </div>
          </div>
          <ul class="text-lg">
            <li v-if="$page.record.version">
              Version: {{ $page.record.version }}
            </li>
            <li v-if="$page.record.date">
              Released: {{ $page.record.date }}
            </li>
          </ul>
        </div>
        <div
          v-if="$page.record.guide"
          v-html="$page.record.guide.content" />
      </div>
    </div>
  </Layout>
</template>

<script>
import Blob from '@/components/Blob'

export default {
  components: {
    Blob
  }
}
</script>

<page-query>
query($id:ID) {
  record: starter(id:$id){
    id
    title
    excerpt
    path
    date (format: "D MMMM YYYY")
    version
    repo
    demo
    guide {
      id
      content
    }
  }
}
</page-query>

<style lang="scss">
.prose .excerpt {
  @apply text-3xl mt-0
}
.guide-content > h1 {
  @apply mb-0;
}
.guide-content > h2 {
  @apply mt-0;
}
.links a {
  @apply block text-sm text-white
}
</style>
