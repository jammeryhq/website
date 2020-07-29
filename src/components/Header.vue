<template>
  <header class="header relative z-50 w-full ">
    <div
      v-if="newsletterBar"
      class="newsletter-bar bg-green-600 text-black text-center relative flex items-center justify-between">
      <g-link
        to="/subscribe"
        class="text-center flex items-center justify-center w-full h-full">
        <strong class="flex items-center justify-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1"><circle cx="8" cy="8" r="5"/><circle cx="5" cy="5" r="4"/></svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2"><circle cx="8" cy="8" r="5"/></svg> -->
          <span>Join our Inner Circle</span>
        </strong> 
        <span class="text-sm"><em>Free to Subscribe</em> &amp; <em>No Spammy Emails</em>. Guarenteed.</span>
      </g-link>
      <button
        class="relative z-30 font-bold text-sm leading-none shadow-3xl rounded-full bg-white text-black h-6 w-6 block mr-3 hover:bg-red-600 hover:text-white"
        @click="newsletterBar = !newsletterBar"
        @keyup="newsletterBar = !newsletterBar">
        &times;
      </button>
    </div>
    <div class="flex items-center justify-between mb-10 md:mb-0 pt-4 px-4 lg:p-10">
      <Logo />
      <nav class="nav flex items-center text-xl md:text-lg md:mr-5 text-center md:text-left">
        <div class="hidden lg:flex lg:items-center lg:space-x-4">
          <g-link
            v-for="({ text, title, customClass, url }, i) in navigation.primary"
            :key="i"
            exact
            :to="url"
            :tooltip="text"
            :class="customClass"
            :aria-label="title">
            <span class="text">{{ text }}</span>
          </g-link>
        </div>
        <NavMobile />
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo'
import NavMobile from '@/components/NavMobile'
import navigation from '@/data/nav-links.yaml';

export default {
  components: {
    Logo,
    NavMobile
  },
  data () {
    return {
      navigation
    }
  },
  stored: {
    newsletterBar: {
      type: String,
      key: 'newsletterBar',
      default: true
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

<style lang="scss">
.home a {
    color: #fff;
}
.home .navicon {
  @apply text-white
}
.home .nav a {
  color: #fff;
}
.mobile-nav {
  @apply absolute h-auto rounded-sm bg-white overflow-hidden block z-50;
  width: 200px;
  right: 30px;
  left: auto;
  top: 100px;
  z-index: 9999;
}
.mobile-nav .nav__link span {
  color: #000;
}
.mobile-nav a:not(.nav__link) {
  color: #000;
  font-weight: bold;
}
/* Top Newsletter Bar */
@keyframes morph {
  0% { @apply bg-green-500 }
  50% { @apply bg-green-600 }
  100% { @apply bg-green-500 }
}
.newsletter-bar {
  animation: morph 3s linear 1s infinite;
  a {
      @apply transition duration-500 ease-in-out font-bold text-sm;
      &:hover {
        transform: scale(1.1);
      }
  }
  strong {
    @apply bg-black mr-4 text-white py-1 rounded-md
  }
}
</style>