import { ApolloClient } from '@apollo/client';
import { cache } from 'apollo/cache';

export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache,
});
