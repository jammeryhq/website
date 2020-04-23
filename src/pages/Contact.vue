<template>
  <Layout>
    <div class="w-1/2 mx-auto relative z-10">
      <h1 class="title">Say Hello</h1>
      <p class="excerpt">Got something you'd like to discuss? Fill out the form below and we'll get back to you as soon as possible.</p>
      <Form />
    </div>
  </Layout>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
    components: {
		Form
	},
    metaInfo: {
        title: "Contact Us",
        description: "Got something to discuss, say hello",
        bodyAttrs: {
            class: "h-screen overflow-hidden page"
        }
	}
}
</script>

<style>
  .page footer a {
    @apply text-black
  }
</style>