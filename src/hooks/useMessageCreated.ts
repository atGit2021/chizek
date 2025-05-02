import { ApolloCache, useSubscription } from '@apollo/client';
import {
  MessageCreatedDocument,
  MessagesQuery,
  SubscriptionMessageCreatedArgs,
} from '../gql/graphql';
import { updateMessages } from '../cache/messages';

export const useMessageCreated = (
  variables: SubscriptionMessageCreatedArgs,
) => {
  return useSubscription(MessageCreatedDocument, {
    variables,
    onData: ({ client, data }) => {
      if (data.data) {
        updateMessages(
          client.cache as ApolloCache<MessagesQuery>,
          data.data.messageCreated,
        );
      }
    },
  });
};
