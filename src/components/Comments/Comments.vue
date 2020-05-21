<template>
  <div class="comments-wrap">
    <div class="comments">
      <h2 class="text-6xl font-bold mb-10">
        Comments
      </h2>
      <div
        v-if="$apollo.loading"
        class="text-2xl">
        Loading...
      </div>
      <div
        v-if="!$apollo.loading && !comments.length"
        class="text-3xl text-gray-700">
        <b class="text-3xl mr-3 text-black">
          <span role="img">😱</span>
        </b>
        No comments yet. Be the first!
      </div>
      <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        v-bind="comment" />
      <div class="comment-form bg-gray-100 rounded-md p-10 mt-10">
        <h2 class="text-4xl font-bold mb-4">
          Join the Conversation
        </h2>
        <CommentForm v-if="!$auth.loading && $auth.isAuthenticated" />
        <div v-if="!$auth.loading && !$auth.user">
          <button
            class="button block px-4 py-2 bg-gray-800 text-xl font-bold rounded-md mt-4 text-white"
            @click="$auth.loginWithPopup()"
            @keyup="$auth.loginWithPopup()">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import CommentForm from '@/components/Comments/CommentForm'
import CommentItem from '@/components/Comments/CommentItem'

// Packages
import gql from 'graphql-tag'

export default {
  components: { CommentForm, CommentItem },
  apollo: {
    comments: {
      query: gql`query Comments ($resource: String!) {
        comments(where: {resource: {_eq: $resource }}) {
          id
          createdAt
          author {
            gravatar
            displayName
          }
          content
        }
      }`,
      subscribeToMore: {
        document: gql`subscription Comments ($resource: String!) {
          comments(where: {resource: {_eq: $resource }}) {
            id
            createdAt
            author {
              gravatar
              displayName
            }
            content
          }
        }`,
        variables () { return { resource: this.$route.fullPath } },
        updateQuery: (previousResult, { subscriptionData }) => subscriptionData.data
      },
      variables () {
        return { resource: this.$route.fullPath }
      }
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
    @apply ml-10;
    @apply mb-5;
  }
  ul {
    @apply list-disc
  }
  ol {
    @apply list-decimal
  }
  blockquote {
    @apply mb-5;
    @apply bg-gray-100;
    @apply text-gray-700;
    @apply p-5;
    @apply inline-block;
    @apply rounded-md;
  }
  blockquote p {
    @apply m-0;
    @apply italic;
    @apply text-xl;
  }
  code {
    @apply whitespace-pre;
    @apply text-sm;
    @apply bg-yellow-100;
    @apply text-gray-700;
    @apply p-5;
    @apply inline-block;
    @apply rounded-md;
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
.comment-form span {
  @apply text-xl
}
.comment-form label i {
  top: -1px;
  left: 2px;
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
  @apply inline-block;
  @apply mr-3;
  @apply text-gray-500;
}
</style>
