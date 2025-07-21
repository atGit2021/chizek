import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { onLogout } from '../../utils/onLogout';
import { PUBLIC_ROUTES } from '../../routes/Routes';
import { createClient } from 'graphql-ws';
import { API_URL, WS_URL } from './urls';
import { getMainDefinition } from '@apollo/client/utilities';
import { Forum, Message } from '../../gql/graphql';

interface OriginalError {
  statusCode: number;
}

const logoutLink = onError((error) => {
  const originalError = error.graphQLErrors?.[0].extensions?.originalError;

  if (isOriginalError(originalError) && originalError?.statusCode === 401) {
    if (!PUBLIC_ROUTES.includes(window.location.pathname)) {
      onLogout();
    }
  }
});

const isOriginalError = (error: unknown): error is OriginalError => {
  return (error as OriginalError)?.statusCode !== undefined;
};

const httpLink = new HttpLink({ uri: `${API_URL}/graphql` });
const wsLink = new GraphQLWsLink(
  createClient({
    url: `ws://${WS_URL}/graphql`,
  }),
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          forums: {
            keyArgs: false,
            merge,
          },
          messages: {
            keyArgs: ['forumId'],
            merge,
          },
        },
      },
    },
  }),
  link: logoutLink.concat(splitLink),
});

function merge<T extends Forum | Message>(
  existing: T[] | undefined,
  incoming: T[],
  { args }: { args: { skip?: number; limit?: number } | null },
) {
  const merged = existing ? [...existing] : [];
  const skip = args?.skip ?? 0;

  for (let i = 0; i < incoming.length; ++i) {
    merged[skip + i] = incoming[i];
  }
  return merged;
}

export default client;
