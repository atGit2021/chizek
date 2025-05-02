import { useQuery } from '@apollo/client';
import { ForumDocument, ForumQueryVariables } from '../gql/graphql';

const useGetForum = (variables: ForumQueryVariables) => {
  return useQuery(ForumDocument, { variables });
};

export { useGetForum };
