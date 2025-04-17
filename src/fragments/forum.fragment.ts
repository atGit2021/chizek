import { graphql } from '../gql';

export const ForumFragment = graphql(`
  fragment ForumFragment on Forum {
    _id
    name
    userId
    isPrivate
    userIds
    messages {
      _id
      content
      createdAt
      ownerId
    }
  }
`);
