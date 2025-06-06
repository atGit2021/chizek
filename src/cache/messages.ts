import { ApolloCache } from '@apollo/client';
import {
  Message,
  MessagesDocument,
  MessagesQueryVariables,
} from '../gql/graphql';
import { PAGE_SIZE } from '../constants/page-size';

export const updateMessages = (
  cache: ApolloCache<unknown>,
  message: Message,
) => {
  const messagesQueryOptions = {
    query: MessagesDocument,
    variables: {
      forumId: message.forumId,
      skip: 0,
      limit: PAGE_SIZE,
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
