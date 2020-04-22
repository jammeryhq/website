<template>
  <header class="bg-red relative z-20 flex items-center justify-between p-10 w-full">
      <strong>
        <g-link to="/"><g-image src="/logo.svg" :alt="$static.metadata.siteName" /></g-link>
      </strong>
      <nav class="nav text-lg">
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/blog">Blog</g-link>
      </nav>
    </header>
</template>

<script>
export default {

}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
a {
    color: #fff;
}
</style>