import { ApolloCache } from '@apollo/client';
import {
  ForumFragmentFragment,
  ForumFragmentFragmentDoc,
  Message,
} from '../gql/graphql';

export const updateLatestMessage = (
  cache: ApolloCache<unknown>,
  message: Message,
) => {
  cache.modify({
    fields: {
      forums(existingForums = []) {
        return existingForums.map((forumRef: { __ref: string }) => {
          const forum = cache.readFragment<ForumFragmentFragment>({
            id: forumRef.__ref,
            fragment: ForumFragmentFragmentDoc,
            fragmentName: 'ForumFragment',
          });

          if (forum && forum._id === message.forumId) {
            return cache.writeFragment({
              id: forumRef.__ref,
              fragment: ForumFragmentFragmentDoc,
              fragmentName: 'ForumFragment',
              data: {
                ...forum,
                latestMessage: message,
              },
            });
          }
          return forumRef;
        });
      },
    },
  });
};
