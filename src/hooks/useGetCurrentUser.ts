import { useQuery } from '@apollo/client';
import { graphql } from '../gql';
import { useEffect } from 'react';
import { setAuthenticated } from '../utils/setAuthenticatedVar';

const getCurrentUserDocument = graphql(`
  query getCurrentUser {
    getCurrentUser {
      _id
      email
    }
  }
`);

const useGetCurrentUser = () => {
  const result = useQuery(getCurrentUserDocument);

  useEffect(() => {
    if (result.data?.getCurrentUser) {
      setAuthenticated(true);
    } else if (!result.loading) {
      setAuthenticated(false);
    }
  }, [result.data, result.loading]);

  return result;
};

export { useGetCurrentUser };
