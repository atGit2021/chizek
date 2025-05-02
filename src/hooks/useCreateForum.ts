import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { snackVar } from '../constants/snack';
import { CreateForumDocument, ForumFragmentFragmentDoc } from '../gql/graphql';
import { useMutation } from '@apollo/client';

const useCreateForum = () => {
  return useMutation(CreateForumDocument, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          forums(existingForums = []) {
            const newForumRef = cache.writeFragment({
              data: data?.createForum,
              fragment: ForumFragmentFragmentDoc,
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
