import { createApolloClient } from './graphql-client'
import VueApollo from 'vue-apollo'
import { getInstance } from '../auth'

const getAuth = async () => {
  const authService = getInstance()
  const getToken = async () => {
    const token = await authService.getTokenSilently()
    return token ? `Bearer ${token}` : ''
  }

  if (!authService.loading) return getToken()

  authService.$watch('loading', loading => {
    if (loading === false) return getToken()
  })
}

const defaultClient = createApolloClient({
  httpEndpoint: process.env.GRIDSOME_GRAPHQL_ENDPOINT,
  wsEndpoint: process.env.GRIDSOME_GRAPHQL_WSS_ENDPOINT,
  getAuth
})

export default VueApollo
export const apolloProvider = new VueApollo({ defaultClient })
