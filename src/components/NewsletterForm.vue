<template>
  <form
    class="form newsletter mb-20 md:mb-0 mt-5 pt-10 mt-8 w-auto"
    :class="align || 'text-center mx-auto'"
    @submit.prevent="subscribe">
    <h2
      v-if="title && headingLevel === '2'"
      class="text-gray-100 text-4xl font-bold mb-3">
      {{ title || 'Get notified when we launch' }}
    </h2>
    <h3
      v-if="title && headingLevel === '3'"
      class="text-gray-100 text-4xl font-bold mb-3">
      {{ title || 'Get notified when we launch' }}
    </h3>
    <p
      v-if="desc"
      class="text-gray-100 text-lg mb-6">
      {{ desc || 'We\'re still working on our initial products, but add your name and email to our list and we\'ll let you know when we go live.' }}
    </p>
    <div class="flex flex-col md:flex-row md:items-center">
      <div class="md:w-1/3 mb-4 md:mb-0 md:mr-5">
        <label
          for="name"
          class="block">
          <span class="hidden invisible">Name</span>
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
          <span class="hidden invisible">Email</span>
          <input
            id="email"
            v-model="subscriber.email"
            name="email"
            class="block w-full form-input mt-0 placeholder-gray-800 text-xl"
            placeholder="Your email address"
            required>
        </label>
      </div>
      <div>
        <button
          type="submit"
          :disabled="!idle"
          :class="submitting ? buttonSendingClass || 'bg-gray-400 text-white' : sent ? buttonSendingClass || 'bg-gray-400 text-accent' : buttonDefaultClass || 'bg-gray-800 text-accent'"
          class="block w-full px-10 py-4 text-xl font-bold rounded-md md:ml-3">
          <span v-if="submitting">Subscribing...</span>
          <span v-else-if="sent">Subscribed!</span>
          <span v-else>Subscribe</span>
        </button>
      </div>
    </div>
    <p
      v-if="error"
      class="text-sm text-red-400 text-right mt-5">
      {{ context.error }}
    </p>
  </form>
</template>

<script>
// Packages
import ky from 'ky'

// Mixins
import formMachineMixin from '@/mixins/formMachine'

export default {
  name: 'NewsletterSignup',
  mixins: [formMachineMixin],
  props: {
    title: {
      type: String,
      default: ''
    },
    headingLevel: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: ''
    },
    buttonDefaultClass: {
      type: String,
      default: ''
    },
    buttonSendingClass: {
      type: String,
      default: ''
    },
    buttonSentClass: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    subscriber: {}
  }),
  async submitHandler (subscriber) {
    const { status, message } = await ky.post('/api/newsletterSubscribe', { json: subscriber }).json()
    if (status === 'error') throw new Error(message)
  },
  methods: {
    async subscribe () {
      this.formService.send({ type: 'SUBMIT', value: this.subscriber })
    }
  }
}
</script>
