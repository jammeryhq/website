<template>
  <form
    class="flex items-start flex-wrap"
    @submit.prevent="submit">
    <div class="w-full">
      <label
        for="comment"
        class="block">
        <span class="text-gray-700">What's on your mind?</span>
      </label>
      <div
        class="relative"
        :class="showMDHint ? 'hint-active' : 'hint-inactive'">
        <ClientOnly>
          <Mentionable
            :keys="['@']"
            :items="[]"
            offset="6"
            insert-space>
            <!-- eslint-disable-next-line vue-a11y/form-has-label :( -->
            <textarea
              v-model="comment.content"
              name="comment"
              class="w-full shadow-inner p-4 border-0 mt-1"
              placeholder="Write your comment..."
              rows="6" />
            <template #no-result>
              <div class="dim">
                No result
              </div>
            </template>
            <template #item-@="{ item }">
              <div class="user">
                {{ item.author }}
              </div>
            </template>
          </Mentionable>
        </ClientOnly>
        <button
          class="md absolute top-0 right-0 w-6 h-auto mt-5 mr-4 inline-block z-50"
          title="✓ Some markdown supported"
          @click.prevent="showMDHint = !showMDHint"
          @keyup="showMDHint = !showMDHint">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"><defs /><path d="M950 192H74c-41 0-74 33-74 74v492c0 41 33 74 74 74h876c41 0 74-33 74-74V266c0-41-33-74-74-74zM576 704H448V512l-96 123-96-123v192H128V320h128l96 128 96-128h128v384zm191 32L608 512h96V320h128v192h96L767 736z" /></svg>
        </button>
        <div
          v-show="showMDHint"
          class="hints w-auto mt-1 border-l-4 border-solid border-accent h-full whitespace-pre-line bg-black text-white p-5 leading-relaxed absolute top-0 right-0">
          <ul>
            <li><strong>Emphasis</strong><span>*text* or _text_</span></li>
            <li><strong>Bold</strong><span>**text** or __text__</span></li>
            <li><strong>Unordered List</strong><span>* Item</span></li>
            <li><strong>Ordered List</strong><span>1. Item</span></li>
            <li><strong>Code</strong><span>```&lt;p&gt;Some html&lt;/p&gt;```</span></li>
            <li><strong>Link</strong><span>[GitHub](http://github.com)</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div
      v-if="!$apollo.loading && !user.displayName"
      class="flex flex-wrap w-full">
      <div class="md:w-1/3">
        <label
          for="first_name"
          class="block mt-4">
          <span class="text-gray-700">First Name</span>
          <input
            id="first_name"
            v-model.trim="author.firstName"
            name="first_name"
            type="text"
            class="block w-full mt-1 form-input"
            placeholder="Evan"
            required>
        </label>
      </div>
      <div class="md:w-1/3">
        <label
          for="last_name"
          class="block mt-4 md:mx-4">
          <span class="text-gray-700">Last Name</span>
          <input
            id="last_name"
            v-model.trim="author.lastName"
            name="last_name"
            type="text"
            class="block w-full mt-1 form-input"
            placeholder="You"
            required>
        </label>
      </div>
      <div class="md:w-1/3">
        <label
          for="last_name"
          class="block mt-4 md:mx-4">
          <span class="text-gray-700">Display Name</span>
          <input
            id="last_name"
            v-model.trim="author.displayName"
            name="last_name"
            type="text"
            class="block w-full mt-1 form-input"
            placeholder="AcrobaticGiraffe"
            required>
        </label>
      </div>
    </div>
    <div class="w-full mt-5">
      <div class="mt-1">
        <!-- <label
              for="newsletter"
              class="block whitespace-pre text-gray-700"
              title="Would you like to subscribe to our newsletter?">
              <input
                name="newsletter"
                type="checkbox"> Subscribe to the newsletter</label> -->
      </div>
      <button
        type="submit"
        :disabled="loading"
        :class="loading ? 'text-white' : 'text-accent'"
        class="button block w-full px-4 py-6 bg-gray-800 text-xl font-bold rounded-md mt-4">
        <span
          v-if="loading"
          class="loading mx-auto">
          <g-image
            src="@/images/loading.gif"
            class="inline" />
          Submitting your comment
        </span>
        <span v-else>Submit Your Comment</span>
      </button>
      <p
        v-if="error"
        class="text-sm text-red-400 text-center mt-5">
        {{ error }}
      </p>
    </div>
  </form>
</template>

<script>
// Components
import { Mentionable } from 'vue-mention'

// Packages
import gql from 'graphql-tag'

export default {
  name: 'CommentForm',
  components: { Mentionable },
  data: () => ({
    author: {},
    comment: {
      content: '',
      replyingTo: null
    },
    showMDHint: false,
    loading: false,
    error: false
  }),
  apollo: {
    user: {
      query: gql`query Author ($id: String!) {
        user (id: $id) {
          id
          displayName
        }
      }`,
      variables () {
        const user = this.$auth.user
        return { id: user.sub }
      }
    }
  },
  methods: {
    async submit () {
      this.loading = true

      try {
        const author = this.author
        const comment = { content: this.comment.content, resource: this.$route.fullPath, parentId: this.replyingTo }
        const userId = this.$auth.user.sub

        await this.$recaptchaLoaded()
        const recaptcha = await this.$recaptcha('comment')

        const response = await this.$apollo.mutate({
          mutation: gql`mutation CreateComment($userId: String!, $author: users_set_input, $comment: CommentInput!, $recaptcha: String!) {
            updateUser(pk_columns: {id: $userId}, _set: $author) {
              id
            }
            createComment(comment: $comment, recaptcha: $recaptcha) {
              id
            }
          }`,
          variables: { author, comment, userId, recaptcha }
        })

        console.log(response)

        this.loading = false
      } catch (error) {
        this.loading = false
        console.error(error)
      }
    }
  }
}
</script>
