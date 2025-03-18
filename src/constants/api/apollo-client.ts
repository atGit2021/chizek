import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { API_URL } from "./urls";
import excludedRoutes from "../excluded-routes";
import { onLogout } from "../../utils/onLogout";

interface OriginalError {
  statusCode: number;
}

const logoutLink = onError((error) => {
  const originalError = error.graphQLErrors?.[0].extensions?.originalError;

  if (isOriginalError(originalError) && originalError.statusCode === 401) {
    if (!excludedRoutes.includes(window.location.pathname)) {
      onLogout();
    }
  }
});

const isOriginalError = (error: unknown): error is OriginalError => {
  return (error as OriginalError)?.statusCode !== undefined;
};

const httpLink = new HttpLink({ uri: `${API_URL}/graphql` });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: logoutLink.concat(httpLink),
});

export default client;
