<template>
  <Layout>
    <div class="p-6 lg:p-0 w-full mx-auto relative">
      <div class="prose lg:prose-2xl mx-auto">
        <div class="">
          <h1 class="title">
            {{ $page.record.title }} Setup Guide
          </h1>
          <div class="flex items-start">
            <p
              v-if="$page.record.excerpt"
              class="excerpt w-3/4">
              {{ $page.record.excerpt }}
            </p>
            <nav class="w-1/4 links">
              <g-link :to="'/plugins/'+$page.record.slug">
                Plugin Details
              </g-link>
              <a :href="$page.record.demo">View Demo</a>
              <a :href="'https://github.com/jammeryhq/' + $page.record.repo">Github Repo</a>
            </nav>
          </div>
          <ul>
            <li v-if="$page.record.version">
              Version: {{ $page.record.version }}
            </li>
            <li v-if="$page.record.date">
              Released: {{ $page.record.date }}
            </li>
            <li v-if="$page.record.date">
              Updated: {{ $page.record.date }}
            </li>
          </ul>
        </div>
        <div
          class=""
          v-html="$page.record.guide.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id:ID) {
  record: plugin(id:$id){
    id
    title
    excerpt
    slug
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
.links a {
  @apply block text-lg
}
</style>
