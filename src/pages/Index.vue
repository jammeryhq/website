<template>
  <Layout>
    <div>
      <Hero />
      <video src="/coding.mp4" autoplay loop class="w-full h-screen absolute top-0 left-0 right-0 bottom-0 object-cover"></video>
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
.home header svg path {
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