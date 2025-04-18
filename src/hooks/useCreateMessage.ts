import { useMutation } from '@apollo/client';
import { graphql } from '../gql';
import { snackVar } from '../constants/snack';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { MessageFragmentFragmentDoc } from '../gql/graphql';

const createMessageDocument = graphql(`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
    createMessage(createMessageInput: $createMessageInput) {
      ...MessageFragment
    }
  }
`);

const useCreateMessage = () => {
  return useMutation(createMessageDocument, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          messages(existingMessages = []) {
            const newMessageRef = cache.writeFragment({
              data: data?.createMessage,
              fragment: MessageFragmentFragmentDoc,
            });
            return [...existingMessages, newMessageRef];
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

export { useCreateMessage };
