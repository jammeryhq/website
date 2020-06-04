<template>
  <div class="md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 z-40 w-full lg:h-screen hero">
    <div class="p-6 md:p-10">
      <div class="md:-mt-10 md:flex md:flex-col md:items-center md:justify-center md:h-screen w-full relative z-50">
        <h2 class="text-white text-5xl md:text-6xl w-full lg:max-w-0 xl:max-w-4xl mx-auto text-center mb-5">
          Fast-track your <b>JAM</b>stack development &amp; learning
        </h2>
        <NewsletterForm title="Get notified when we launch" headingLevel="2" desc="We're still working on our initial products, but add your name and email to our list and we'll let you know when we go live." />
      </div>
    </div>
  </div>
</template>

<script>
import NewsletterForm from '@/components/NewsletterForm'

export default {
  components: {
    NewsletterForm
  }
}
</script>

<style>
.hero:after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 40;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0,0,0,0.6);
}
</style>
