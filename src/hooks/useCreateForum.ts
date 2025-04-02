import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { snackVar } from '../constants/snack';
import { ForumFragment } from '../fragments/forum.fragment';
import { graphql } from '../gql';
import { useMutation } from '@apollo/client';

const createForumDocument = graphql(`
  mutation createForum($createForumInput: CreateForumInput!) {
    createForum(createForumInput: $createForumInput) {
      ...ForumFragment
    }
  }
`);

const useCreateForum = () => {
  return useMutation(createForumDocument, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          forums(existingForums = []) {
            const newForumRef = cache.writeFragment({
              data: data?.createForum,
              fragment: ForumFragment,
            });
            return [...existingForums, newForumRef];
          },
        },
      });
    },
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
