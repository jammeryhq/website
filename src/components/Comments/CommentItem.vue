<template>
  <div class="comment">
    <figure>
      <img
        :src="profileImage"
        :alt="author.displayName"
        class="object-cover">
    </figure>
    <div>
      <div class="md:flex md:justify-start md:items-center">
        <h3>{{ author.displayName }}</h3>
        <span>{{ date }}</span>
      </div>
      <div
        class="comment-content"
        v-html="content" />
      <p class="reply">
        <button
          @click="replyTo(id)"
          @keyup="replyTo(id)">
          Reply to {{ author.displayName }}
        </button>
      </p>
    </div>
  </div>
</template>

<script>
// Components
import CommentItem from './CommentItem'

export default {
  name: 'CommentItem',
  components: { CommentItem },
  props: {
    id: {
      type: String,
      default: ''
    },
    createdAt: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    author: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    profileImage () {
      return `https://cdn.auth0.com/avatars/${this.author.displayName.slice(0, 2).toLowerCase()}.png`
    },
    date () {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Intl.DateTimeFormat('default', options).format(new Date(this.createdAt))
    }
  },
  methods: {
    replyTo (id) {
      console.log(id)
    }
  }
}
</script>
