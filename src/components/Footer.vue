<template>
  <footer class="relative z-40 block md:flex lg:items-center justify-center md:justify-between flex-wrap px-6 py-4 lg:p-10 text-gray-700 w-full mb-4">
    <span class="mt-5 mb-4 lg:my-0 block text-center lg:text-left">© 2020 JammeryHQ. All rights reserved.</span>
    <nav class="hidden xl:block nav text-center my-3 md:my-0">
      <g-link
        to="/about"
        title="Read more about who we are and what motivated us to start Jammery">
        About
      </g-link>
      <g-link
        to="/team"
        title="More about the Team">
        Team
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
        class="relative"
        rel="nofollow noopener"
        title="Follow our updates on Twitter">
        Twitter
        <g-image 
          src="/external.svg"
          class="w-3 h-3 fill-current hidden absolute right-0 top-0"
        />
      </a>
      <a
        href="https://github.com/jammeryhq"
        target="_blank"
        class="relative"
        rel="nofollow noopener"
        title="Check out our code on Github">
        Github
        <g-image 
          src="/external.svg"
          class="w-3 h-3 fill-current hidden absolute right-0 top-0"
        />
      </a>
    </nav>
    <span class="my-0 md:my-3 lg:my-0 block text-center md:text-right">Jammery is an <a
      href="/about"
      title="">Open Collab.</a></span>
  </footer>
</template>

<style>
footer {
  & nav a {
    @apply px-4;
    &:hover, &:focus {
      @apply underline;
      & img {
        @apply block;
      }
    }
  }
}
</style>