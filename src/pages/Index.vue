<template>
  <Layout>
    <div>
      <Hero />
      <Newsletter />
    </div>
  </Layout>
</template>

<script>
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'

export default {
  components: {
    Hero,
    Newsletter
  },
  metaInfo: {
			title: "",
			bodyAttrs: {
				class: "home h-screen overflow-hidden"
			}
		}
}
</script>
<style>
.home header svg text {
    fill: #fff;
}
.home nav a {
  color: #fff;
}
.hero a { 
  @apply text-white 
}
.home footer {
  @apply text-gray-300
}
</style>        