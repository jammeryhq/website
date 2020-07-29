<template>
  <div class="md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 z-40 w-full lg:h-screen hero">
    <div class="p-6 md:p-10">
      <div class="-mt-10 md:flex md:flex-col md:items-center md:justify-center md:h-screen w-full relative z-30">
        <h2 class="text-white text-4xl md:text-6xl w-full lg:max-w-0 xl:max-w-4xl mx-auto text-center mb-5">
          Fast-track your <b>JAM</b>stack development &amp; learning
        </h2>
        <p class="max-w-2xl text-3xl text-center text-gray-300">
          We're working on <strong class="text-white">Jello</strong> - a configurable utility starter and cli build tool for Gridsome, which will take you from 0 to 80mph in under 2 minutes.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
