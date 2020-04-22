<template>
    <footer class="absolute bottom-0 z-20 flex items-center justify-between p-10 text-gray-600 w-full mb-4">
        <span class="ml-6">© 2020 Jammery HQ. All rights reserved.</span>
        <nav class="nav">
            <g-link to="/about">About</g-link>
            <g-link to="/contact">Contact</g-link>
            <g-link to="/privacy">Privacy</g-link>
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