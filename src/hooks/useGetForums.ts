import { useQuery } from '@apollo/client';
import { graphql } from '../gql';

const getForumsDocument = graphql(`
  query forums {
    forums {
      ...ForumFragment
    }
  }
`);

const useGetForums = () => {
  return useQuery(getForumsDocument);
};

export { useGetForums };
