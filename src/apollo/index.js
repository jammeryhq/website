import { createApolloClient } from './graphql-client'
import VueApollo from 'vue-apollo'
import { getInstance } from '../auth'

const getAuth = () => new Promise((resolve, reject) => {
  const authService = getInstance()
  const getToken = async () => {
    if (!authService.isAuthenticated) return ''
    const token = await authService.getTokenSilently()
    return token ? `Bearer ${token}` : ''
  }

  if (!authService.loading) resolve(getToken())

  authService.$watch('loading', loading => {
    if (loading === false) resolve(getToken())
  })
})

const { apolloClient } = createApolloClient({
  httpEndpoint: process.env.GRIDSOME_GRAPHQL_ENDPOINT,
  wsEndpoint: process.env.GRIDSOME_GRAPHQL_WSS_ENDPOINT,
  getAuth
})

export default VueApollo
export const apolloProvider = new VueApollo({ defaultClient: apolloClient })
