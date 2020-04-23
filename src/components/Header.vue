<template>
  <header class="relative z-50 lg:flex lg:items-center lg:justify-between pt-4 px-4 lg:p-10 w-full">
      <Logo />
      <nav class="nav text-xl md:text-lg md:mr-5 text-center md:text-left" role="nav">
        <g-link class="nav__link" to="/about" title="More about Chris and Travis">About</g-link>
        <g-link class="nav__link" to="/blog" exact title="Updates on our progresss">Blog</g-link>
        <g-link class="nav__link" to="/contact" title="Say hello">Contact</g-link>
        <span class="px-5 leading-none hidden md:inline-block"></span>
        <g-link class="text-2xl mt-1 md:mt-0 md:text-xl block md:inline-block" to="/blog/help-us-build-products-you-will-love" title="Take the JammeryHQ 2020 Survey">Take the Survey &rarr;</g-link>
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