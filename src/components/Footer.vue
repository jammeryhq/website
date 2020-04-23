<template>
  <footer class="opacity-50 md:opacity-100 absolute bottom-0 z-50 lg:flex lg:items-center lg:justify-between p-4 lg:p-10 text-gray-600 w-full lg:mb-4">
    <span class="ml-6 block text-center md:text-left">© 2020 Jammery HQ. All rights reserved.</span>
    <nav class="nav text-center my-3 md:my-0">
      <g-link
        to="/about"
        class="hidden md:inline"
        title="More about Chris and Travis">
        About
      </g-link>
      <g-link
        to="/contact"
        class="hidden md:inline"
        title="Say hello">
        Contact
      </g-link>
      <g-link
        to="/privacy"
        title="Read about our privacy policy">
        Privacy
      </g-link>
      <a
        href="https://twitter.com/jammeryhq"
        target="_blank"
        rel="nofollow noopener"
        title="Follow our updates on Twitter">Twitter</a>
      <a
        href="https://github.com/jammeryhq"
        target="_blank"
        rel="nofollow noopener"
        title="Check out our code on Github">Github</a>
    </nav>
    <span class="md:mr-6 block text-center md:text-left mb-4 md:mb-0">a <a
      href="https://smokeyfro.com"
      title="Chris Rault, a South African based front-end designer and entrepreneur">SmokeyFro</a> &amp; <a
        href="https://travisreynolds.com"
        title="Travis Reynolds, a full-stack developer from the UK">Thetre97</a> collab</span>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer nav a {
    @apply px-4
}
</style>
