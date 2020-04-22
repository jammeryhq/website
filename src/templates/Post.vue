<template>
  <Layout>
    <div class="w-1/2 mx-auto relative z-10">
        <h1 class="title">{{ $page.post.title }}</h1>
        <p class="excerpt">{{ $page.post.excerpt }}</p>
        <div class="content pb-40" v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
			title: "",
			bodyAttrs: {
				class: "h-screen overflow-x-auto page"
			}
		}
}
</script>

<page-query>
query Post ($path: String) {
	post(path: $path) {
		title
		slug
		id
		excerpt
        content
	}
}
</page-query>

<style>
  .page footer a {
    @apply text-black
  }
</style>