<template>
    <footer class="absolute bottom-0 z-50 flex items-center justify-between p-10 text-gray-600 w-full mb-4">
        <span class="ml-6">© 2020 Jammery HQ. All rights reserved.</span>
        <nav class="nav">
            <g-link to="/about">About</g-link>
            <g-link to="/contact">Contact</g-link>
            <g-link to="/privacy">Privacy</g-link>
            <a href="https://twitter.com/jammeryhq" target="_blank" rel="nofollow noopener" title="Follow our updates on Twitter">Twitter</a>
            <a href="https://github.com/jammeryhq" target="_blank" rel="nofollow noopener" title="Follow our updates on Twitter">Github</a>
        </nav>
        <span class="mr-6">A <a href="https://smokeyfro.com">SmokeyFro</a> &amp; <a href="https://travisreynolds.com">Thetre97</a> collab</span>
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