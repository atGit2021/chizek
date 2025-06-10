import { useQuery } from '@apollo/client';
import {
  ForumsDocument,
  ForumsQuery,
  ForumsQueryVariables,
} from '../gql/graphql';

const useGetForums = (variables: ForumsQueryVariables) => {
  return useQuery<ForumsQuery>(ForumsDocument, {
    variables,
  });
};

export { useGetForums };
