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
          displayName
          gravatar
        }
      }`,
      skip () {
        return this.$auth.loading || !this.$auth.isAuthenticated
      },
      variables () {
        const authUser = this.$auth.user
        const id = authUser[ 'https://hasura.io/jwt/claims' ][ 'x-hasura-user-id' ]
        return { id }
      }
    }
  }
}
</script>
