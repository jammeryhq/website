<template>
  <Layout>
    <div class="p-6 lg:p-0 relative z-10">
      <PageHeader
        title="Say Hello"
        summary="Got something you'd like to discuss? Fill out the form below and we'll get back to you as soon as possible." />
      <ContactForm class=" prose lg:prose-2xl mx-auto mt-10" />
    </div>
  </Layout>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    ContactForm,
    PageHeader
  },
  metaInfo: {
    title: 'Contact Us',
    description: 'Got something to discuss, say hello',
    bodyAttrs: {
      class: 'page contact'
    }
  }
}
</script>

<style>
  .page footer a {
    @apply text-black
  }
  .contact .vue-expand textarea {
    @apply font-sans text-lg
  }
</style>
