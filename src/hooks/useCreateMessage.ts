import { useMutation } from '@apollo/client';
import { snackVar } from '../constants/snack';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { CreateMessageDocument } from '../gql/graphql';
import { updateMessages } from '../cache/messages';
import { updateLatestMessage } from '../cache/latestMessage';

const useCreateMessage = () => {
  return useMutation(CreateMessageDocument, {
    update: (cache, { data }) => {
      if (data?.createMessage) {
        updateMessages(cache, data.createMessage);
        updateLatestMessage(cache, data.createMessage);
      }
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
