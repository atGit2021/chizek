import { useMutation } from '@apollo/client';
import { CreateUserDocument } from '../gql/graphql';

const useCreateUser = () => {
  return useMutation(CreateUserDocument);
};

export { useCreateUser };
