import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { onLogout } from '../../utils/onLogout';
import { PUBLIC_ROUTES } from '../../routes/Routes';

interface OriginalError {
  statusCode: number;
}

const logoutLink = onError((error) => {
  const originalError = error.graphQLErrors?.[0].extensions?.originalError;

  if (isOriginalError(originalError) && originalError.statusCode === 401) {
    if (!PUBLIC_ROUTES.includes(window.location.pathname)) {
      onLogout();
    }
  }
});

const isOriginalError = (error: unknown): error is OriginalError => {
  return (error as OriginalError)?.statusCode !== undefined;
};

const httpLink = new HttpLink({ uri: `/graphql` });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: logoutLink.concat(httpLink),
});

export default client;
