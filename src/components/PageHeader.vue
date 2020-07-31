<template>
  <div class="page-header w-1/2 mx-auto">
    <h1
      v-if="title != ''"
      class="text-6xl font-extrabold">
      {{ title }}
    </h1>
    <h2
      v-if="subtitle != ''"
      class="text-4xl font-bold">
      {{ subtitle }}
    </h2>
    <p
      v-if="summary != ''"
      class="text-2xl mt-4">
      {{ summary }}
    </p>
    <slot name="page-links" />
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
    subtitle: {
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
