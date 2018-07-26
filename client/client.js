import { Accounts } from 'meteor/accounts-base'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: '/graphql',
  request: operation =>
    operation.setContext(() => ({
      headers: {
        authorization: Accounts._storedLoginToken()
      }
    }))
})
