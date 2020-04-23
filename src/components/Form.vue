<template>
  <div
    class="form pb-40"
    refs>
    <div
      v-if="status === 'success'"
      class="success">
      <div class="flex items-center justify-start w-full">
        <div class="w-full p-10 mt-10 bg-gray-100 border-l-8 bg-accent border-accent">
          <h2>Message sent!</h2>
          <p class="m-0">
            Expect a response within the next 24 hours (though usually less).
          </p>
        </div>
      </div>
    </div>
    <div
      v-if="status === 'error'"
      class="error">
      Oops, something went wrong. Please try again.
    </div>
    <form
      v-if="!status"
      @submit="sendForm">
      <label
        for="message"
        class="block">
        <span
          class="text-gray-700">Message</span>
        <ClientOnly>
          <vue-expand
            id="message"
            v-model="message"
            v-focus
            :handler="handler"
            placeholder="Write your message here"
            min-row="5" />
        </ClientOnly>
      </label>
      <div>
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 md:mr-5">
            <label
              for="name"
              class="block mt-4">
              <span class="text-gray-700">Your name</span>
              <input
                id="name"
                v-model="name"
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
                v-model="email"
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
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Form',
  components: {
    VueExpand: () => import('vue-expand')
  },
  data: function () {
    return {
      handler: new Vue(),
      status: null,
      name: null,
      email: null,
      budget: '',
      website: '',
      message: null,
      radioValue: 'message',
      message_type: this.radioValue
    }
  },
  mounted () {
    this.handler.$emit('focus')
  },
  methods: {
    sendForm: function (event) {
      event.preventDefault()

      fetch('https://formcarry.com/s/iqNMdsHQ9Zt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
          budget: this.budget,
          website: this.website
        })
      })
        .then(response => response.json())
        .then(response => {
          if (response.code === 200) {
            this.status = 'success'
          } else {
            // Formcarry error
            this.status = 'error'
          }
        })
      // network error
        .catch(() => (this.status = 'error'))
    }
  }
}
</script>
