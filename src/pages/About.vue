<template>
  <Layout>
    <div class="p-6 lg:p-0 lg:w-2/3 xl:w-1/2 mx-auto relative z-10">
      <h1 class="title">
        About Us
      </h1>
      <p class="excerpt">
        <em>JammeryHQ</em> is an open collaboration between <strong>Chris Rault</strong>, <strong>Travis Reynolds</strong>, <strong>Marcus Reinhardt</strong> and <strong>Kabolobari Benakole</strong>. We're still in the process of setting up the business admin, but we'll all be equal partners, each bringing something different to table that compliments the collective.
        </p>
        <p>Chris  is a designer, front-end developer and entrepenuer, Travis and Marcus are both a talented full-stack devs and Kabolobari is a designer and front-end developer.
      </p>
      <p class="text-2xl">
        Our goal for the collab is to build a suite of tools aimed at the JAMstack Community. We're still figuring out where there is the most need, but for now keep an eye on our blog for updates.
      </p>

      <h2>Open Collaboration</h2>

      <p>You may be wondering what we mean by <em>open collaboration</em>... Our plan is to document every step of our journey, with the hopes that it inspires other designers and developers to collaborate on products of their own.</p>
      
      <p>We'll be publishing our wins, our losses, lessons learnt, the legal setup process, our finances and any relevant processes that we setup along the way.</p>
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
</style>
