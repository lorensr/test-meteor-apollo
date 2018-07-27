// import { Accounts } from 'meteor/accounts-base'
// import ApolloClient from 'apollo-boost'

// const client = new ApolloClient({
//   uri: '/graphql',
//   request: operation =>
//     operation.setContext(() => ({
//       headers: {
//         authorization: Accounts._storedLoginToken()
//       }
//     }))
// })

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { MeteorAccountsLink } from 'meteor/apollo'

const client = new ApolloClient({
  link: ApolloLink.from([
    new MeteorAccountsLink(),
    new HttpLink({
      uri: '/graphql'
    })
  ]),
  cache: new InMemoryCache()
})
