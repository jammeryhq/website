<template>
  <Layout>
    <div class="p-6 lg:p-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto relative">
      <div>
        <div class="flex items-center justify-start space-x-8">
          <h1 class="title">
            {{ $page.plugin.title }}
          </h1>
        </div>
      </div>
      </div>
  </Layout>
</template>

<page-query>
query Guide ($path: String) {
  plugin: pluginGuide(path: $path) {
    title
    path
    slug
    id
    excerpt
    content
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
