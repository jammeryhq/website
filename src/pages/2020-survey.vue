<template>
  <Layout>
    <div class="lg:flex items-start justify-between relative">
      <div class="w-full md:w-2/5 lg:w-1/2 px-4 py-0 md:p-10 md:pt-0">
        <h1 class="text-4xl sm:text-6xl font-bold mt-0">
          2020 Survey
        </h1>
        <h2 class="text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-bold my-4">
          Help us build<br>products you'll love
        </h2>
        <p class="text-lg md:text-xl lg:text-2xl xl:text-3xl">
          To ensure we're hyper focussed on building products and services that have an actual need, we're reaching out to the <strong>JAMstack Community</strong> to get feedback on areas that can be improved while building <em>Vue</em> and <em>Gridsome</em> based sites.
        </p>
      </div>
      <div class="w-full lg:w-3/5 xl:pr-10 relative z-50">
        <iframe
          title="2020 Survey"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfD11Wb4d4SLjUYoG3CcNimyIr0Qy75Y4zHZV1LbhNA3vyjBQ/viewform?usp=sf_link&amp;embedded=true&amp;usp=embed_googleplus"
          style="border: 0; width: 100%; height: 5700px;"
          allowfullscreen />
      </div>
    </div>
    <g-image
      src="/2.svg"
      class="image hidden md:block" />
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
@media (min-width: 1024px) {
  .image {
    position: absolute;
    top: 200px;
    width: 300px;
    left: 35%;
  }
}
</style>
