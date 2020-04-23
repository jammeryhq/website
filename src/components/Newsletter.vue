<template>
  <form
    class="form"
    @submit.prevent="subscribe">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 md:mr-5">
        <label
          for="name"
          class="block mt-4">
          <span class="text-gray-700">Your name</span>
          <input
            id="name"
            v-model="subscriber.name"
            name="name"
            class="block w-full mt-1 form-input"
            placeholder="Evan You"
            required>
        </label>
      </div>
      <div class="md:w-1/2">
        <label
          for="email"
          class="block mt-4">
          <span class="text-gray-700">Your email</span>
          <input
            id="email"
            v-model="subscriber.email"
            name="email"
            class="block w-full mt-1 form-input"
            placeholder="evan@vuejs.org"
            required>
        </label>
      </div>
    </div>
    <input
      type="hidden"
      name="_gotcha">
    <button
      type="submit"
      class="block w-full px-10 py-6 mt-4 mb-5 text-xl font-bold bg-gray-800 rounded-md text-accent md:mt-8">
      <span>Send it, Sparky!</span>
    </button>
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
