<template>
  <header class="relative z-50 flex items-center justify-between p-10 w-full">
      <Logo />
      <nav class="nav text-lg mr-5">
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/blog">Blog</g-link>
        <g-link class="nav__link" to="/contact">Contact</g-link>
        <span class="inline-block px-5 leading-none"></span>
        <a class="text-xl" href="https://jammeryhq.com/blog/2020-survey">Take the Survey &rarr;</a>
      </nav>
    </header>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  components: {
    Logo
  }
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