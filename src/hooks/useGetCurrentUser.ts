import { useQuery } from '@apollo/client';
import { graphql } from '../gql';
import { useEffect } from 'react';
import { authenticatedVar } from '../constants/authenticated';

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
  const result = useQuery(getCurrentUserDocument, { skip });

  useEffect(() => {
    if (result.data?.getCurrentUser) {
      authenticatedVar(true);
      sessionStorage.setItem('authenticated', 'true');
    }
  }, [result.data]);

  return result;
};

export { useGetCurrentUser };
