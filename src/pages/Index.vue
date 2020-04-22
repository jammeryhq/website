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
				class: "h-screen overflow-hidden"
			}
		}
}
</script>
<style scoped>
.hero a { 
  @apply text-white 
}
footer {
  @apply text-gray-300
}
</style>