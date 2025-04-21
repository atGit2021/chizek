import { useMutation } from '@apollo/client';
import { graphql } from '../gql';
import { snackVar } from '../constants/snack';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { MessagesDocument } from '../gql/graphql';

const createMessageDocument = graphql(`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
    createMessage(createMessageInput: $createMessageInput) {
      ...MessageFragment
    }
  }
`);

const useCreateMessage = (forumId: string) => {
  return useMutation(createMessageDocument, {
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
