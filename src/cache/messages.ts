import { ApolloCache } from '@apollo/client';
import {
  Message,
  MessagesDocument,
  MessagesQuery,
  MessagesQueryVariables,
} from '../gql/graphql';

export const updateMessages = (
  cache: ApolloCache<MessagesQuery>,
  message: Message,
) => {
  const messagesQueryOptions = {
    query: MessagesDocument,
    variables: {
      forumId: message.forumId,
    } satisfies MessagesQueryVariables,
  };
  const messages = cache.readQuery({ ...messagesQueryOptions });
  const existingMessages = messages?.messages || [];
  const alreadyExists = existingMessages.some(
    (existingMessage) => existingMessage._id === message._id,
  );
  if (alreadyExists) return;

  cache.writeQuery({
    ...messagesQueryOptions,
    data: {
      messages: [...existingMessages, message],
    },
  });
};
