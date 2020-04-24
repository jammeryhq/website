<template>
  <Layout>
    <div>
      <Hero />
      <video
        src="/coding-small.m4v"
        autoplay
        loop
        muted
        class="w-full h-screen absolute top-0 left-0 right-0 bottom-0 object-cover" />
    </div>
  </Layout>
</template>

<script>
import Hero from '@/components/Hero'

export default {
  components: {
    Hero
  },
  metaInfo: {
    title: 'Fast-track your JAMstack Development & Learning',
    description: 'Fast-track your JAMstack development with our Vue/Gridsome Starters, Components and Guides',
    bodyAttrs: {
      class: 'home h-screen lg:overflow-hidden'
    }
  }
}
</script>
<style>
.home header svg path {
    fill: #fff;
}
.home header a {
  color: #fff;
}
.hero a {
  @apply text-white
}
.home footer {
  @apply text-gray-300
}
</style>
