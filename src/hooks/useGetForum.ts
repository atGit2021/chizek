import { useQuery } from '@apollo/client';
import { graphql } from '../gql';
import { ForumQueryVariables } from '../gql/graphql';

const getForumDocument = graphql(`
  query forum($_id: String!) {
    forum(_id: $_id) {
      ...ForumFragment
    }
  }
`);

const useGetForum = (variables: ForumQueryVariables) => {
  return useQuery(getForumDocument, { variables });
};

export { useGetForum };
