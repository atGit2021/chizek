import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { snackVar } from '../constants/snack';
import { graphql } from '../gql';
import { useMutation } from '@apollo/client';

const createForumDocument = graphql(`
  mutation createForum($createForumInput: CreateForumInput!) {
    createForum(createForumInput: $createForumInput) {
      _id
      userId
      isPrivate
      userIds
      name
    }
  }
`);

const useCreateForum = () => {
  return useMutation(createForumDocument, {
    onError: (error) => {
      if (error.networkError) {
        snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
      }
      if (error.graphQLErrors) {
        error.graphQLErrors.forEach(({ message }) => {
          snackVar({ message, type: 'error' });
        });
      }
    },
  });
};

export { useCreateForum };
