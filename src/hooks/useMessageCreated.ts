import { useSubscription } from '@apollo/client';
import {
  MessageCreatedDocument,
  SubscriptionMessageCreatedArgs,
} from '../gql/graphql';
import { updateMessages } from '../cache/messages';
import { updateLatestMessage } from '../cache/latestMessage';

export const useMessageCreated = (
  variables: SubscriptionMessageCreatedArgs,
) => {
  return useSubscription(MessageCreatedDocument, {
    variables,
    onData: ({ client, data }) => {
      if (data.data) {
        updateMessages(client.cache, data.data.messageCreated);
        updateLatestMessage(client.cache, data.data.messageCreated);
      }
    },
  });
};
