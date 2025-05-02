import { useMutation } from '@apollo/client';
import { snackVar } from '../constants/snack';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { CreateMessageDocument, MessagesDocument } from '../gql/graphql';

const useCreateMessage = (forumId: string) => {
  return useMutation(CreateMessageDocument, {
    update: (cache, { data }) => {
      const messagesQueryOptions = {
        query: MessagesDocument,
        variables: {
          forumId,
        },
      };
      const messages = cache.readQuery({ ...messagesQueryOptions });
      if (!messages || !data?.createMessage) {
        return;
      }
      cache.writeQuery({
        ...messagesQueryOptions,
        data: {
          messages: messages.messages.concat(data?.createMessage),
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
