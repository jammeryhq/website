<template>
  <Layout>
    <div class="p-6 lg:p-0 lg:w-1/2 mx-auto relative z-10">
      <h1 class="title">
        About Us
      </h1>
      <p class="excerpt">
        <em>JammeryHQ</em> is a collaboration between <strong>Chris Rault</strong> and <strong>Travis Reynolds</strong>. Chris  is a designer, front-end developer and entrepenuer, while Travis is a talented full-stack developer.
      </p>
      <p class="text-2xl">
        Our goal for the collab is to build a suite of tools aimed at the JAMstack Community. We're still figuring out where there is the most need, but for now keep an eye on our blog for updates.
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Us',
    description: 'About the team behind JammeryHQ',
    bodyAttrs: {
      class: 'page about'
    }
  }
}
</script>

<style>
  .page footer a {
    @apply text-black
  }
  .about footer {
    @apply absolute bottom-0
  }
</style>
