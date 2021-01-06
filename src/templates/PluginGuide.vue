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
        </div>
        <div
          v-if="$page.record.guide"
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

<style>
.prose .excerpt {
  @apply text-3xl mt-0
}
.links a {
  @apply block text-lg
}
.prose table {
  @apply table-fixed text-lg;
}
.prose li > p {
  @apply m-0
}
</style>
