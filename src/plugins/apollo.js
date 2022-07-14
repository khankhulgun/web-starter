
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
const httpLink = new HttpLink({

  uri: 'https://boxoffice.mn/query',
  // uri: 'http://192.168.67.143:8080/query',
});

// Cache implementation
const cache = new InMemoryCache({
  addTypename: false
});


const apolloClient = new ApolloClient({
  link: httpLink,
  cache: cache,

});

export default createApolloProvider({
  defaultClient: apolloClient,
});
