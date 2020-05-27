<template>
  <header class="header relative z-50 lg:flex lg:items-center lg:justify-between mb-10 md:mb-0 pt-4 px-4 lg:p-10 w-full">
    <Logo />
    <nav class="nav text-xl md:text-lg md:mr-5 text-center md:text-left">
      <g-link
        class="nav__link"
        to="/starters"
        title="View our Gridsome starters">
        Starters
      </g-link>
      <g-link
        class="nav__link"
        to="/plugins"
        title="View our Gridsome plugins">
        Plugins
      </g-link>
      <g-link
        class="nav__link"
        to="/blog"
        exact
        title="Updates on our progresss">
        Blog
      </g-link>
      <g-link
        class="nav__link"
        to="/contact"
        title="Say hello">
        Contact
      </g-link>
      <span class="px-5 leading-none hidden md:inline-block" />
      <g-link
        class="text-2xl mt-1 md:mt-0 md:text-xl block md:inline-block survey-link"
        to="/2020-survey"
        title="Take the JammeryHQ 2020 Survey">
        Take the Survey
      </g-link>
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
