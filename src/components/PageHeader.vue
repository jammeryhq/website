<template>
  <div class="page-header prose lg:prose-2xl mx-auto">
    <h1
      v-if="title != ''"
      class="title">
      {{ title }}
    </h1>
    <p
      v-if="summary != ''"
      class="excerpt">
      {{ summary }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    summary: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
