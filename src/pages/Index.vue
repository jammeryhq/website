<template>
  <Layout>
    <div>
      <Hero />
      <video
        src="/coding-smaller.m4v"
        autoplay
        loop
        :muted="true"
        class="w-full h-screen fixed md:absolute top-0 left-0 right-0 bottom-0 object-cover" />
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
.home .app {
  @apply h-screen
}
.home header svg path {
    fill: #fff;
}
.hero a {
  @apply text-white
}

@media ( min-width: 768px ) {
  .home footer {
    @apply text-gray-300 absolute bottom-0
  }
  .home .survey {
    @apply bg-white;
  }
  .home .survey span {
    @apply text-black font-bold;
  }
}
</style>
