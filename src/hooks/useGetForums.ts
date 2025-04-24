import { useQuery } from '@apollo/client';
import { ForumsDocument, ForumsQuery } from '../gql/graphql';

const useGetForums = () => {
  return useQuery<ForumsQuery>(ForumsDocument);
};

export { useGetForums };
