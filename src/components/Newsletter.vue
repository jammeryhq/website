<template>
  <form
    class="form newsletter mb-20 md:mb-0 mt-5 pt-10 mt-8 mx-auto w-auto"
    @submit.prevent="subscribe">
    <h2 class="text-gray-100 text-xl md:text-2xl lg:text-4xl font-bold text-center mb-3">Get notified when we launch</h2>
    <p class="text-gray-100 text-base md:text-lg max-w-xl mx-auto text-center mb-6">We're still working on our initial products, but add your name and email to our list and we'll let you know when we go live.</p>
    <div class="flex flex-col md:flex-row md:items-center md:justify-center">
      <div class="md:w-1/3 mb-4 md:mb-0 md:mr-5">
        <label
          for="name"
          class="block">
          <input
            id="name"
            v-model="subscriber.name"
            name="name"
            class="block w-full form-input mt-0 placeholder-gray-800 text-xl"
            placeholder="Your name"
            required>
        </label>
      </div>
      <div class="md:w-1/3 mb-4 md:mb-0">
        <label
          for="email"
          class="block">
          <input
            id="email"
            v-model="subscriber.email"
            name="email"
            class="block w-full form-input mt-0 placeholder-gray-800 text-xl"
            placeholder="Your email address"
            required>
        </label>
      </div>
    <div class="mb-4 md:mb-0">
    <input
      type="hidden"
      name="_gotcha">
    <button
      type="submit"
      class="block w-full px-10 py-4 text-xl font-bold rounded-md bg-accent md:ml-5">
      <span>Subscribe</span>
    </button>
    </div>
   </div>

  </form>
</template>

<script>
// Packages
import ky from 'ky'

export default {
  name: 'NewsletterSignup',
  data: () => ({
    subscriber: {},
    sent: false,
    error: false,
    loading: false
  }),
  methods: {
    async subscribe () {
      this.loading = true
      this.error = false

      try {
        const subscriberPayload = this.subscriber
        const { status, message } = await ky.post('/api/newsletterSubscribe', { json: subscriberPayload }).json()
        this.loading = false

        if (status === 'error') throw new Error(message)
        this.sent = true
      } catch (error) {
        this.error = error.message
      }
    }
  }
}
</script>
