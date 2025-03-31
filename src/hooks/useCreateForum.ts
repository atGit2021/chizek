import { graphql } from '../gql';
import { useMutation } from '@apollo/client';

const createForumDocument = graphql(`
  mutation createForum($createForumInput: CreateForumInput!) {
    createForum(createForumInput: $createForumInput) {
      _id
      userId
      isPrivate
      userIds
      name
    }
  }
`);

const useCreateForum = () => {
  return useMutation(createForumDocument);
};

export { useCreateForum };
