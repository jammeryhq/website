<template>
  <footer class="relative z-40 flex lg:items-center justify-center md:justify-between flex-wrap px-6 py-4 lg:p-10 text-gray-700 w-full mb-4">
    <span class="mt-5 mb-4 lg:my-0 block text-center lg:text-left">© 2020 Jammery HQ. All rights reserved.</span>
    <nav class="hidden xl:block nav text-center my-3 md:my-0">
      <g-link
        to="/about"
        title="More about Chris and Travis">
        About
      </g-link>
      <g-link
        to="/contact"
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
    <span class="md:mr-6 my-0 md:my-3 lg:my-0 block text-center lg:text-left">a <a
      href="https://smokeyfro.com"
      title="Chris Rault, a South African based front-end designer and entrepreneur">SmokeyFro</a> &amp; <a
        href="https://travisreynolds.dev"
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
