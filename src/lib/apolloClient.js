import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import config from '@/config';
import api from '@/api';

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${config.BASE_URL}${api.graphql.endpoint}`,
  }),
  cache: new InMemoryCache(), // Cache for API responses
});

export default client;