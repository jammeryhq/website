<template>
  <div class="md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 z-40 w-full lg:h-screen hero">
    <div class="p-6 md:p-10">
      <div class="md:-mt-2 md:flex md:flex-col md:items-center md:justify-center md:h-screen w-full relative z-50">
        <h2 class="text-white text-4xl lg:text-5xl xl:text-6xl lg:w-1/2 mx-auto text-center lg:-mt-40">
          Fast-track your <b>JAM</b>stack development &amp; learning
        </h2>
        <Newsletter />
      </div>
    </div>
  </div>
</template>

<script>
import Newsletter from '@/components/Newsletter'

export default {
  components: {
    Newsletter
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
