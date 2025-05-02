import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { setAuthenticated } from '../utils/setAuthenticatedVar';
import { GetCurrentUserDocument } from '../gql/graphql';

const useGetCurrentUser = () => {
  const result = useQuery(GetCurrentUserDocument);

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
