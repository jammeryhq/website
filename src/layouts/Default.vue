<template>
  <div class="app relative min-h-screen">
    <Header />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style src="../main.css" />
