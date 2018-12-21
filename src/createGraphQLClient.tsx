import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// 	http://dev.apollodata.com/react/initialization.html#creating-client
export const createGraphQLClient = () => {
  // const networkInterface = createNetworkInterface({
  //   uri: 'http://localhost:8080/graphql'
  // });
  // const client = new ApolloClient({
  //   networkInterface: networkInterface
  // });


  const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:8080/graphql' }),
    cache: new InMemoryCache()
  });

  return client;
};
