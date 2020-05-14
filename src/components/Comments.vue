<template>
  <div class="comments-wrap">
    <div class="comments">
      <h2 class="text-6xl font-bold mb-10">
        Comments
      </h2>
      <div
        v-if="loadingComments"
        class="text-2xl">
        Loading...
      </div>
      <div
        v-if="!loadingComments && !allComments.length"
        class="text-2xl">
        No comments yet. Be the first.
      </div>
      <div
        v-for="comment in allComments"
        :key="comment._id"
        class="comment">
        <figure>
          <img
            :src="`https://www.gravatar.com/avatar/${comment.gravatar}`"
            :alt="comment.author"
            class="object-cover">
        </figure>
        <div>
          <div class="md:flex md:justify-start md:items-center">
            <h3>{{ comment.author }}</h3>
            <span>{{ formatDate(comment._ts) }}</span>
          </div>
          <div
            class="comment-content"
            v-html="comment.content" />
          <p class="reply">
            <button
              @click="replyTo(comment.author)"
              @keyup="replyTo(comment.author)">
              Reply to {{ comment.author }}
            </button>
          </p>
        </div>
      </div>
    </div>
    <div
      ref="commentForm"
      class="comment-form bg-gray-100 rounded-md p-10 mt-10">
      <h2 class="text-4xl font-bold mb-4">
        Join the Conversation
      </h2>
      <form
        class="flex items-start flex-wrap"
        @submit.prevent="submit">
        <div class="w-full">
          <label
            for="comment"
            class="block">
            <span class="text-gray-700">What's on your mind?</span>
          </label>
          <div class="relative" :class="showMDHint ? 'hint-active' : 'hint-inactive'">
            <ClientOnly>
              <Mentionable
                :keys="['@']"
                :items="allAuthors"
                offset="6"
                insert-space>
                <!-- eslint-disable-next-line vue-a11y/form-has-label :( -->
                <textarea
                  v-model="content"
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
              class="hints transition duration-500 ease-in-out translate-y-full
              w-2/5 mt-1 border-l-4 border-solid border-accent h-full whitespace-pre-line bg-black text-white p-5 leading-relaxed absolute top-0 right-0"
              v-show="showMDHint">
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
        <div class="md:w-1/3">
          <label
            for="first_name"
            class="block mt-4">
            <span class="text-gray-700">First name</span>
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
            <span class="text-gray-700">Last name</span>
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
            for="email"
            class="block mt-4">
            <span class="text-gray-700">Email</span>
            <input
              id="email"
              v-model.trim="author.email"
              name="email"
              type="email"
              class="block w-full mt-1 form-input"
              placeholder="evan@vuejs.org"
              required>
          </label>
        </div>
        <div class="w-full mt-5">
          <div class="mt-1">
            <label
              for="remember"
              class="block whitespace-pre text-gray-700">
              <input
                v-model="remember"
                name="remember"
                type="checkbox"
                title="Should we save your name and email in your browser?"> Save details for next time</label>
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
            :disabled="submitting || loadingCaptcha"
            :class="submitting || loadingCaptcha ? 'font-bold bg-gray-400 text-white' : 'font-bold bg-gray-800 text-accent'"
            class="block w-full px-4 py-6 text-xl font-bold rounded-md mt-4">
            <span v-if="submitting || loadingCaptcha">Submitting Your Comment...</span>
            <span v-else>Submit Your Comment</span>
          </button>
          <p
            v-if="error"
            class="text-sm text-red-400 text-center mt-5">
            {{ context.error }}
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// Components
import { Mentionable } from 'vue-mention'

// Packages
import ky from 'ky'
import marked from 'marked'
import Vue from 'vue'

// Mixins
import formMachineMixin from '@/mixins/formMachine'

export default {
  components: { Mentionable },
  mixins: [formMachineMixin],
  data: () => ({
    loadingComments: true,
    loadingCaptcha: false,
    allComments: [],
    content: '',
    author: {},
    commentsPoll: null,
    handler: new Vue(),
    remember: true,
    showMDHint: false
  }),
  computed: {
    allAuthors () {
      const authors = new Set(this.allComments.map(({ author }) => author))
      return [...authors].map(author => ({ value: author, author }))
    }
  },
  watch: {
    remember (remember) {
      if (!remember) {
        localStorage.setItem('comment-author', false)
      }
    }
  },
  async mounted () {
    this.handler.$emit('focus')
    await this.fetchAuthor()
    await this.fetchComments()
    this.commentsPoll = setInterval(this.fetchComments, 10000)
  },
  beforeDestroy () {
    clearInterval(this.commentsPoll)
  },
  async submitHandler ({ recaptcha, ...payload }) {
    const { status, message } = await ky.post('/api/comments', { json: payload, headers: { recaptcha } }).json()
    if (status === 'error') throw new Error(message)
  },
  methods: {
    async fetchAuthor () {
      const commentAuthor = JSON.parse(localStorage.getItem('comment-author'))
      if (!commentAuthor) this.remember = false
      if (commentAuthor) this.author = commentAuthor
    },
    async fetchComments () {
      const resource = this.$route.path.slice(this.$route.path.lastIndexOf('/') + 1)
      const comments = await ky.get(`/api/comments/${resource}`).json()
      this.allComments = comments
      this.loadingComments = false
    },
    formatDate (date) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Intl.DateTimeFormat('default', options).format(date / 1000)
    },
    async submit () {
      // Fetch recaptcha token
      this.loadingCaptcha = true
      await this.$recaptchaLoaded()
      const recaptcha = await this.$recaptcha('comment')

      // Create comment
      const resource = this.$route.path
      const comment = { author: `${this.author.firstName} ${this.author.lastName}`, email: this.author.email, content: this.content }
      await this.formService.send({ type: 'SUBMIT', value: { recaptcha, resource, ...comment } })

      // Set or remove saved user data
      const savedFields = { firstName: comment.firstName, lastName: comment.lastName, email: comment.email }
      if (this.remember) localStorage.setItem('comment-author', JSON.stringify(savedFields))
      if (!this.remember) localStorage.removeItem('comment-author')

      // Optimistic Update
      if (!this.error) this.allComments.push({ resource, ...comment, content: marked(comment.content), _id: Math.random(), _ts: new Date().getTime() * 1000 })

      // Clear data
      this.loadingCaptcha = false
      this.content = ''
    },
    replyTo (author) {
      this.content = `@${author} `
      this.$scrollTo(this.$refs.commentForm)
    }
  }
}
</script>

<style lang="scss">
.comment {
  @apply flex;
  @apply items-start;
  @apply justify-start;
}
.comment h3 {
  @apply text-2xl;
  @apply font-bold;
}
.comment-content {
  ul,
  ol {
    @apply ml-10 mb-5
  }
  ul {
    @apply list-disc
  }
  ol {
    @apply list-decimal
  }
  blockquote {
    @apply mb-5 bg-gray-100 text-gray-700 p-5 inline-block rounded-md
  }
  blockquote p {
    @apply m-0 italic text-xl
  }
  code {
    @apply whitespace-pre text-sm bg-yellow-100 text-gray-700 p-5 inline-block rounded-md
  }
}
.comment span {
  @apply text-sm;
  @apply ml-2;
  @apply text-gray-700;
}
.comment p {
  @apply text-lg;
  @apply leading-relaxed;
}
.comment-form .form-input,
.comment-form .vue-expand {
  @apply bg-white;
}
.comment figure {
  @apply block;
  @apply rounded-full;
  @apply overflow-hidden;
  @apply mr-4;
  max-width: 50px;
  max-height: 50px;
  min-height: 50px;
  min-width: 50px;
}
.comment > div > .reply button {
  @apply text-sm;
  @apply text-white;
}
.comment > div:hover > .reply button {
  @apply text-sm;
  @apply text-black;
}
.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
    cursor: pointer;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}

/* Markdown Hints */
.hint-active svg path {
  fill: #fff;
}
.hint-active .hints {
  @apply translate-y-0
}
.hints ul li strong {
  @apply inline-block mr-3 text-gray-500
}
</style>