<template>
  <div class="app relative min-h-screen">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
// Components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Packages
import gql from 'graphql-tag'

export default {
  components: {
    Header,
    Footer
  },
  apollo: {
    user: {
      query: gql`query User ($id: String!) {
        user (id: $id) {
          id
          email
          name
          firstName
          lastName
          displayName
          gravatar
        }
      }`,
      skip () {
        return this.$auth.loading || !this.$auth.isAuthenticated
      },
      variables () {
        const user = this.$auth.user
        return { id: user.sub }
      }
    }
  }
}
</script>
