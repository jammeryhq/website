<template>
  <form
    class="form"
    @submit.prevent="subscribe">
    <label for="name">
      Your Name
      <input
        id="name"
        v-model="subscriber.name"
        type="text"
        required>
    </label>
    <label for="email">
      Your Name
      <input
        id="email"
        v-model="subscriber.email"
        type="email"
        required>
    </label>
    <button type="submit">
      Subscribe
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
