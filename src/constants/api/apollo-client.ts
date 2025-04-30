import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { onLogout } from '../../utils/onLogout';
import { PUBLIC_ROUTES } from '../../routes/Routes';
import { createClient } from 'graphql-ws';
import { WS_URL } from './urls';
import { getMainDefinition } from '@apollo/client/utilities';

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

const httpLink = new HttpLink({ uri: `/graphql` });
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
  cache: new InMemoryCache(),
  link: logoutLink.concat(splitLink),
});

export default client;
