<template>
  <Layout>
    <div class="flex items-start justify-between relative pt-10 h-full">
      <div class="w-1/2 p-10 pt-0 survey-content">
        <h1 class="title">
          2020 Survey
        </h1>
        <h2 class="text-5xl font-bold my-4">
          Help us build products you'll love
        </h2>
        <p class="excerpt">
          To ensure we're hyper focussed on building products and services that have an actual need, we're reaching out to the <strong>JAMstack Community</strong> to get feedback on areas that can be improved while building <em>Vue</em> and <em>Gridsome</em> based sites.
        </p>
      </div>
      <g-image
        src="/2.svg"
        class="image" />
      <div class="w-1/3 bg-white pr-20 shadow-2xl fixed right-0 h-full survey-form overflow-y-auto z-50">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfD11Wb4d4SLjUYoG3CcNimyIr0Qy75Y4zHZV1LbhNA3vyjBQ/viewform?embedded=true"
          width="640"
          height="5478"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          class="mr-10 text-xl">Loading…</iframe>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: '',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Help us build products that you\'ll love by filling out our 2020 Survey'
        },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: 'JammeryHQ 2020 Survey' },
        { property: 'og:description', content: 'Help us build products that you\'ll love by filling out our 2020 Survey.' },
        { property: 'og:url', content: '' },
        { property: 'article:published_time', content: 'Test' },
        { name: 'twitter:title', content: 'JammeryHQ 2020 Survey' },
        { name: 'twitter:description', content: 'Help us build products that you\'ll love by filling out our 2020 Survey.' },
        { name: 'twitter:site', content: '@jammeryhq' },
        { name: 'twitter:creator', content: '@jammeryhq' }
      ],
      bodyAttrs: {
        class: 'min-h-screen overflow-x-auto page survey'
      }
    }
  }
}
</script>

<style lang="scss">
  .survey footer {
    @apply hidden
  }
  .survey {
      header {
          @apply bg-white fixed;
      }
    .survey-content {
        @apply fixed;
        top: 170px;
    }
    .survey-form {
        top: 150px;
    }
  }
  .image {
      position: absolute;
      top: 200px;
      width: 500px;
      right: 430px;
      z-index: 0;
  }
</style>
