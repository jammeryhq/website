<template>
  <figure
    alt="Blob"
    class="blob z-0 block absolute top-0 left-0 right-0"
    v-html="selectedBlob" />
</template>

<script>
export default {
  name: 'Blob',
  data() {
    return {
      blobs: [
        '<svg class="blob1" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"><path fill="#00d084" d="M123.8 57.4c13.1 8.9 33.8 3.1 45.4 7.8 11.5 4.6 13.9 19.7 13.3 34.4-.6 14.8-4.2 29.1-13.3 38.1-9.1 8.9-23.6 12.5-36.1 19.7-12.4 7.3-22.8 18.3-35.5 22.4-12.7 4.2-27.9 1.5-36.8-7.8-8.9-9.3-11.6-25.2-11-38.3.6-13.1 4.4-23.4 6-32.8 1.6-9.4.9-17.8 2-28.1 1-10.3 3.8-22.3 11.2-34.5 7.3-12.2 19.1-24.5 27.8-18.9 8.6 5.6 14 29.1 27 38z"/></svg>',
        '<svg class="blob3" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"><path fill="#00d084" d="M130.9 49.7c13.9 4.7 33 3.5 39.8 10.9 6.8 7.4 1.1 23.4-1.6 37.8-2.8 14.4-2.8 27.2-8.7 36-5.9 8.8-17.9 13.7-28.9 23.5-11.1 9.8-21.3 24.6-33.1 27.4-11.8 2.8-25.3-6.3-32.4-18.4-7.2-12.1-8.1-27.1-7-38.7 1.1-11.6 4.2-19.9 2.3-29.3-1.8-9.3-8.7-19.8-9.4-30.7-.7-10.9 4.8-22.3 13.9-29.8 9-7.5 21.6-11.1 32.2-7.6 10.5 3.5 19.1 14.2 32.9 18.9z"/></svg>',
        '<svg class="blob5" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"><path fill="#00d084" d="M134.1 46c13.6 2.8 30.6 4.9 40 13.7 9.5 8.9 11.5 24.6 5.8 37-5.7 12.4-19.1 21.6-30 27.9-11 6.4-19.4 9.9-27.3 21.4-7.9 11.5-15.3 30.8-25.6 36-10.4 5.3-23.7-3.6-28.4-17-4.7-13.3-.8-31-9.7-42.6-8.9-11.6-30.7-17-32.9-23.7C23.7 92 41 84 48.3 69.6c7.3-14.4 4.6-35.1 11.6-41.8 6.9-6.7 23.5.5 36.9 6 13.4 5.5 23.7 9.3 37.3 12.2z"/></svg>'
      ],
      selectedBlob: ''
    }
  },
  created () {
    const idx = Math.floor(Math.random() * this.blobs.length);l
    this.selectedBlob = this.blobs[idx]
  }
}
</script>

<style lang="scss">
    figure.blob {
        margin: 0;
        margin-top: -5.5rem;
        margin-left: 5px;
        width: 950px;
    }
    figure.blob .blob1 {
        @apply relative;
        top: -25px!important;
        right: 10px;
    }
</style>
