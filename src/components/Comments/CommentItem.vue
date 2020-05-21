<template>
  <div class="comment">
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
          @click="replyTo(comment.id)"
          @keyup="replyTo(comment.id)">
          Reply to {{ comment.author }}
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    id: {
      type: String,
      default: ''
    },
    createdAt: {
      type: String,
      default: ''
    },
    author: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    replyTo (id) {
      console.log(id)
    }
  }
}
</script>
