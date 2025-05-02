import { useSubscription } from '@apollo/client';
import {
  MessageCreatedDocument,
  SubscriptionMessageCreatedArgs,
} from '../gql/graphql';

export const useMessageCreated = (
  variables: SubscriptionMessageCreatedArgs,
) => {
  return useSubscription(MessageCreatedDocument, { variables });
};
