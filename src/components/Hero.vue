<template>
  <div class="absolute top-0 bottom-0 -mb-10 left-0 right-0 z-0 w-full h-screen hero">
    <div class="p-10">
        <div class="flex items-center justify-center h-screen w-full relative z-50">
            <h2 class="text-white text-6xl lg:w-1/2 mx-auto text-center -mt-40">Fast-track your <b>JAM</b>stack development &amp; learning</h2>
        </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>
body.home {
  background-image: url(/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero:after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.9);
}
</style>