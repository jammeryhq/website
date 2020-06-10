<template>
  <Layout>
    <div class="md:flex items-start justify-between relative lg:pt-10 h-full">
      <div class="w-2/3 lg:w-1/2 p-10 pt-0 lg:fixed survey-content">
        <h1 class="text-4xl sm:text-6xl font-bold">
          2020 Survey
        </h1>
        <h2 class="text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-bold my-4">
          Help us build products you'll love
        </h2>
        <p class="text-lg md:text-xl lg:text-2xl xl:text-3xl">
          To ensure we're hyper focussed on building products and services that have an actual need, we're reaching out to the <strong>JAMstack Community</strong> to get feedback on areas that can be improved while building <em>Vue</em> and <em>Gridsome</em> based sites.
        </p>
      </div>
      <div class="w-auto lg:w-1/3 bg-white xl:pr-20 lg:shadow-2xl lg:fixed lg:right-0 lg:h-full survey-form overflow-y-auto z-50">
        <iframe
          title="Survey Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfD11Wb4d4SLjUYoG3CcNimyIr0Qy75Y4zHZV1LbhNA3vyjBQ/viewform?embedded=true"
          width="640"
          height="5478"
          frameborder="0"
          marginheight="0"
          marginwidth="0">Loading…</iframe>
      </div>
    </div>
          <g-image
        src="/2.svg"
        class="image" />
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

  .survey {
      header {
          @apply bg-white;
      }
    .survey-content {
        top: 170px;
    }
    .survey-form {
        top: 150px;
    }
  }
  .image {
    position: absolute;
    top: 150px;
    width: 300px;
    right: -80px;
    z-index: 0;
  }

body.survey {
  @apply overflow-x-hidden
}
@media ( min-width: 1024px ) {
    .survey {
      header {
          @apply fixed;
      }
    }
}

/* Small (sm) */
@media (min-width: 640px) {
  
}

/* Medium (md) */
@media (min-width: 768px) {
  
}

/* Large (lg) */
@media (min-width: 1024px) {
  .image {
    position: fixed;
    top: 200px;
    width: 500px;
    left: 50%;
  }
}

/* Extra Large (xl) */
@media (min-width: 1280px) {
  
}

</style>
