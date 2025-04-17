import { useQuery } from '@apollo/client';
import { MessagesDocument, MessagesQueryVariables } from '../gql/graphql';

const useGetMessages = (variables: MessagesQueryVariables) => {
  return useQuery(MessagesDocument, { variables });
};

export { useGetMessages };
