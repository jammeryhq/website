<template>
  <Layout>
    <div class="p-6 lg:p-0 mb-10 lg:w-1/2 prose lg:prose-2xl mx-auto relative z-10">
      <h1 class="title">Subscribe</h1>
      <p class="excerpt">
        Want to be kept in the loop? Sign up for our newsletter and we'll send you occasional updates on our progress.
      </p>
      <NewsletterForm align="" />
    </div>
  </Layout>
</template>

<script>
import NewsletterForm from '@/components/NewsletterForm'

export default {
    components: {
        NewsletterForm
    },
    metaInfo: {
        title: 'Subscribe',
        description: 'Subscribe to the Jammery newsletter',
        bodyAttrs: {
        class: 'subscribe'
        }
    }
}
</script>

<style>
    @media ( min-width: 768px ) {
        .subscribe footer {
            @apply absolute bottom-0
        }
    }
</style>
