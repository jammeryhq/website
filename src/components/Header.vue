<template>

  <header class="header relative z-50 w-full ">
    <div class="mobile-nav transition duration-500 ease-in-out flex justify-center items-center lg:hidden bg-black p-4 w-full text-white" v-show="showSection">
      <g-link
        class="nav__link"
        to="/starters"
        title="View our Gridsome starters">
        <span>Starters</span>
      </g-link>
      <g-link
        class="nav__link"
        to="/plugins"
        title="View our Gridsome plugins">
        <span>Plugins</span>
      </g-link>
      <g-link
        class="nav__link"
        to="/blog"
        exact
        title="Updates on our progresss">
        <span>Blog</span>
      </g-link>
      <g-link
        class="nav__link"
        to="/contact"
        title="Say hello">
        <span>Contact</span>
      </g-link>
    </div>
    <div class="flex items-center justify-between mb-10 md:mb-0 pt-4 px-4 lg:p-10">
      <Logo />
      <nav class="nav flex items-center text-xl md:text-lg md:mr-5 text-center md:text-left">
        <div class="hidden lg:inline-block">
          <g-link
            class="nav__link"
            to="/starters"
            title="View our Gridsome starters">
            <span>Starters</span>
          </g-link>
          <g-link
            class="nav__link"
            to="/plugins"
            title="View our Gridsome plugins">
            <span>Plugins</span>
          </g-link>
          <g-link
            class="nav__link"
            to="/blog"
            exact
            title="Updates on our progresss">
            <span>Blog</span>
          </g-link>
          <g-link
            class="nav__link"
            to="/contact"
            title="Say hello">
            <span>Contact</span>
          </g-link>
        </div>
        <div class="flex justify-end items-center">
          <g-link
            class="text-2xl mt-1 md:mt-0 ml-5 md:text-xl block md:inline-block survey-link font-bold"
            to="/2020-survey"
            title="Take the JammeryHQ 2020 Survey">
            <span>Take the Survey</span>
          </g-link>
          <button
            v-on:click.prevent="toggle"
            class="block lg:hidden navicon"
            title="Take the JammeryHQ 2020 Survey">
            <strong>Explore&nbsp;&nbsp;<i class="toggleIcon" id="toggleIcon">{{toggleIcon}}</i></strong>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  components: {
    Logo
  },
  methods: {
    toggle() {
     this.showSection = !this.showSection
    }
  },
  data() {
    return {
      showSection: false,
      toggleIcon: '≡'
    }
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
.home .navicon {
  @apply text-white
}
.mobile-nav a span {
  @apply text-white
}
</style>
