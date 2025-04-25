/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
};

export type CreateForumInput = {
  isPrivate: Scalars['Boolean']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  userIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateMessageInput = {
  content: Scalars['String']['input'];
  forumId: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Forum = {
  __typename?: 'Forum';
  _id: Scalars['ID']['output'];
  isPrivate: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
  userIds: Array<Scalars['String']['output']>;
};

export type ForumFilterInput = {
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  userIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Message = {
  __typename?: 'Message';
  _id: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  ownerId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createForum: Forum;
  createMessage: Message;
  createUser: User;
  removeForum: Forum;
  removeUser: User;
  updateForum: Forum;
  updateUser: User;
};

export type MutationCreateForumArgs = {
  createForumInput: CreateForumInput;
};

export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationRemoveForumArgs = {
  id: Scalars['String']['input'];
};

export type MutationUpdateForumArgs = {
  updateForumInput: UpdateForumInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  findForums: Array<Forum>;
  forum: Forum;
  forums: Array<Forum>;
  getCurrentUser: User;
  messages: Array<Message>;
  user: User;
  users: Array<User>;
};

export type QueryFindForumsArgs = {
  filterQuery?: InputMaybe<ForumFilterInput>;
};

export type QueryForumArgs = {
  _id: Scalars['String']['input'];
};

export type QueryMessagesArgs = {
  forumId: Scalars['String']['input'];
};

export type QueryUserArgs = {
  _id: Scalars['String']['input'];
};

export type UpdateForumInput = {
  id: Scalars['String']['input'];
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  email: Scalars['String']['output'];
};

export type ForumFragmentFragment = {
  __typename?: 'Forum';
  _id: string;
  name?: string | null;
  userId: string;
  isPrivate: boolean;
  userIds: Array<string>;
};

export type MessageFragmentFragment = {
  __typename?: 'Message';
  _id: string;
  content: string;
  createdAt: any;
};

export type CreateForumMutationVariables = Exact<{
  createForumInput: CreateForumInput;
}>;

export type CreateForumMutation = {
  __typename?: 'Mutation';
  createForum: {
    __typename?: 'Forum';
    _id: string;
    name?: string | null;
    userId: string;
    isPrivate: boolean;
    userIds: Array<string>;
  };
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = {
  __typename?: 'Query';
  getCurrentUser: { __typename?: 'User'; _id: string; email: string };
};

export type ForumQueryVariables = Exact<{
  _id: Scalars['String']['input'];
}>;

export type ForumQuery = {
  __typename?: 'Query';
  forum: {
    __typename?: 'Forum';
    _id: string;
    name?: string | null;
    userId: string;
    isPrivate: boolean;
    userIds: Array<string>;
  };
};

export type ForumsQueryVariables = Exact<{ [key: string]: never }>;

export type ForumsQuery = {
  __typename?: 'Query';
  forums: Array<{
    __typename?: 'Forum';
    _id: string;
    name?: string | null;
    userId: string;
    isPrivate: boolean;
    userIds: Array<string>;
  }>;
};

export type MessagesQueryVariables = Exact<{
  forumId: Scalars['String']['input'];
}>;

export type MessagesQuery = {
  __typename?: 'Query';
  messages: Array<{
    __typename?: 'Message';
    _id: string;
    content: string;
    createdAt: any;
  }>;
};

export type CreateMessageMutationVariables = Exact<{
  createMessageInput: CreateMessageInput;
}>;

export type CreateMessageMutation = {
  __typename?: 'Mutation';
  createMessage: {
    __typename?: 'Message';
    _id: string;
    content: string;
    createdAt: any;
  };
};

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser: { __typename?: 'User'; _id: string; email: string };
};

export const ForumFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ForumFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Forum' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPrivate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userIds' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ForumFragmentFragment, unknown>;
export const MessageFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MessageFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Message' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MessageFragmentFragment, unknown>;
export const CreateForumDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateForum' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createForumInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateForumInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createForum' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createForumInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createForumInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ForumFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ForumFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Forum' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPrivate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userIds' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateForumMutation, CreateForumMutationVariables>;
export const GetCurrentUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCurrentUser' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCurrentUser' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const ForumDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Forum' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: '_id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'forum' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: '_id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: '_id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ForumFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ForumFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Forum' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPrivate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userIds' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ForumQuery, ForumQueryVariables>;
export const ForumsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Forums' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'forums' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ForumFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ForumFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Forum' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isPrivate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'userIds' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ForumsQuery, ForumsQueryVariables>;
export const MessagesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Messages' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'forumId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'messages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'forumId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'forumId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'MessageFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MessageFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Message' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MessagesQuery, MessagesQueryVariables>;
export const CreateMessageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateMessage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createMessageInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateMessageInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createMessage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createMessageInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createMessageInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'MessageFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MessageFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Message' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateMessageMutation,
  CreateMessageMutationVariables
>;
export const CreateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createUserInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateUserInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createUserInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createUserInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
