import { InMemoryCache, makeVar, gql } from '@apollo/client';
import { IUser } from 'interfaces';

// local states
export const currentUserVar = makeVar<IUser | null>(null);

// local queries
export const GET_CURRENT_USER = gql`
    query {
        user @client
    }
`;

// Field policy of local states
export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                user() {
                    return currentUserVar();
                },
            },
        },
    },
});
