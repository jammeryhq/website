<template>
  <header class="header relative z-50 w-full ">
    <div class="bg-green-600 text-black text-center relative" v-if="newsletterBar">
      <g-link to="/subscribe" class="block w-full h-full">
        <strong>Join our inner circle.</strong> Free to subscribe and no spammy emails.
      </g-link>
      <button class="font-bold text-lg rounded-full bg-white text-black h-8 w-8 block absolute top-0 right-0 mt-3 mr-3" v-on:click="newsletterBar = !newsletterBar">&times;</button>
    </div>
    <div class="flex items-center justify-between mb-10 md:mb-0 pt-4 px-4 lg:p-10">
      <Logo />
      <nav class="nav flex items-center text-xl md:text-lg md:mr-5 text-center md:text-left">
        <div class="hidden lg:flex lg:items-center lg:space-x-4">
          <g-link exact v-for="({ text, title, customClass, url }, i) in navigation.primary" :key="i" :to="url" :tooltip="text" :class="customClass" :aria-label="title">
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
import navigation from "@/data/nav-links.yaml";

export default {
  components: {
    Logo,
    NavMobile
  },
  data() {
    return {
      navigation,
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

<style>
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
  width: 200px;
  right: 30px;
  left: auto;
  top: 100px;
  z-index: 9999;
  position: absolute;
  height: auto;
  display: block;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}
.mobile-nav .nav__link span {
  color: #000;
}
.mobile-nav a:not(.nav__link) {
  color: #000;
  font-weight: bold;
}
</style>
