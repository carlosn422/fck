import { ApolloClient } from 'apollo-boost'
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-boost'
import { withClientState } from 'apollo-link-state'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { merge } from 'lodash'
import { UserSelectionsResolverAndDefaults } from 'data/UserSelectionsStore'
import { PanelResolverAndDefaults } from 'components/Panel/PanelLayout'
import { CheckoutDefaults } from 'data/CheckoutStore'

const httpLink = new HttpLink({
  // @ts-ignore
  uri: window.httpLinkUrl,
  credentials: 'same-origin'
})

const cache = new InMemoryCache({
  dataIdFromObject: (o: any) => o.cId || o.id
})

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {}
  },
  ...merge(
    PanelResolverAndDefaults,
    UserSelectionsResolverAndDefaults,
    CheckoutDefaults
  )
})

const link = ApolloLink.from([stateLink, httpLink])

const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true
})

export default client
