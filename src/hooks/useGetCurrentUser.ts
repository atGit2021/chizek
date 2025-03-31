import { useQuery } from '@apollo/client';
import { graphql } from '../gql';

const getCurrentUserDocument = graphql(`
  query getCurrentUser {
    getCurrentUser {
      _id
      email
    }
  }
`);

interface UseGetCurrentUserProps {
  skip?: boolean;
}

const useGetCurrentUser = ({ skip = false }: UseGetCurrentUserProps = {}) => {
  return useQuery(getCurrentUserDocument, { skip });
};

export { useGetCurrentUser };
