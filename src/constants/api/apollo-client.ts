import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error"
import { API_URL } from "./urls";
import excludedRoutes from "../excluded-routes";

const logoutEvent = new Event("logout");

const logoutLink = onError((error) => {
    if (
        error.graphQLErrors?.length && 
        (error.graphQLErrors[0].extensions?.originalError as any).statusCode === 401
    ) {
        if (!excludedRoutes.includes(window.location.pathname)) {
           window.dispatchEvent(logoutEvent);
        }
    }
});

const httpLink = new HttpLink({ uri: `${API_URL}/graphql` });

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: logoutLink.concat(httpLink),
});

export default client;
