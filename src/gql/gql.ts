/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment ForumFragment on Forum {\n    _id\n    name\n    userId\n    isPrivate\n    userIds\n  }\n": typeof types.ForumFragmentFragmentDoc,
    "fragment MessageFragment on Message {\n  _id\n  content\n  createdAt\n}": typeof types.MessageFragmentFragmentDoc,
    "query Messages($forumId: String!) {\n  messages(forumId: $forumId) {\n    ...MessageFragment\n  }\n}": typeof types.MessagesDocument,
    "\n  mutation createForum($createForumInput: CreateForumInput!) {\n    createForum(createForumInput: $createForumInput) {\n      ...ForumFragment\n    }\n  }\n": typeof types.CreateForumDocument,
    "\n  mutation CreateMessage($createMessageInput: CreateMessageInput!) {\n    createMessage(createMessageInput: $createMessageInput) {\n      ...MessageFragment\n    }\n  }\n": typeof types.CreateMessageDocument,
    "\n  mutation CreateUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n      email\n    }\n  }\n": typeof types.CreateUserDocument,
    "\n  query getCurrentUser {\n    getCurrentUser {\n      _id\n      email\n    }\n  }\n": typeof types.GetCurrentUserDocument,
    "\n  query forum($_id: String!) {\n    forum(_id: $_id) {\n      ...ForumFragment\n    }\n  }\n": typeof types.ForumDocument,
    "\n  query forums {\n    forums {\n      ...ForumFragment\n    }\n  }\n": typeof types.ForumsDocument,
};
const documents: Documents = {
    "\n  fragment ForumFragment on Forum {\n    _id\n    name\n    userId\n    isPrivate\n    userIds\n  }\n": types.ForumFragmentFragmentDoc,
    "fragment MessageFragment on Message {\n  _id\n  content\n  createdAt\n}": types.MessageFragmentFragmentDoc,
    "query Messages($forumId: String!) {\n  messages(forumId: $forumId) {\n    ...MessageFragment\n  }\n}": types.MessagesDocument,
    "\n  mutation createForum($createForumInput: CreateForumInput!) {\n    createForum(createForumInput: $createForumInput) {\n      ...ForumFragment\n    }\n  }\n": types.CreateForumDocument,
    "\n  mutation CreateMessage($createMessageInput: CreateMessageInput!) {\n    createMessage(createMessageInput: $createMessageInput) {\n      ...MessageFragment\n    }\n  }\n": types.CreateMessageDocument,
    "\n  mutation CreateUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n      email\n    }\n  }\n": types.CreateUserDocument,
    "\n  query getCurrentUser {\n    getCurrentUser {\n      _id\n      email\n    }\n  }\n": types.GetCurrentUserDocument,
    "\n  query forum($_id: String!) {\n    forum(_id: $_id) {\n      ...ForumFragment\n    }\n  }\n": types.ForumDocument,
    "\n  query forums {\n    forums {\n      ...ForumFragment\n    }\n  }\n": types.ForumsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ForumFragment on Forum {\n    _id\n    name\n    userId\n    isPrivate\n    userIds\n  }\n"): (typeof documents)["\n  fragment ForumFragment on Forum {\n    _id\n    name\n    userId\n    isPrivate\n    userIds\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment MessageFragment on Message {\n  _id\n  content\n  createdAt\n}"): (typeof documents)["fragment MessageFragment on Message {\n  _id\n  content\n  createdAt\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Messages($forumId: String!) {\n  messages(forumId: $forumId) {\n    ...MessageFragment\n  }\n}"): (typeof documents)["query Messages($forumId: String!) {\n  messages(forumId: $forumId) {\n    ...MessageFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createForum($createForumInput: CreateForumInput!) {\n    createForum(createForumInput: $createForumInput) {\n      ...ForumFragment\n    }\n  }\n"): (typeof documents)["\n  mutation createForum($createForumInput: CreateForumInput!) {\n    createForum(createForumInput: $createForumInput) {\n      ...ForumFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateMessage($createMessageInput: CreateMessageInput!) {\n    createMessage(createMessageInput: $createMessageInput) {\n      ...MessageFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateMessage($createMessageInput: CreateMessageInput!) {\n    createMessage(createMessageInput: $createMessageInput) {\n      ...MessageFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCurrentUser {\n    getCurrentUser {\n      _id\n      email\n    }\n  }\n"): (typeof documents)["\n  query getCurrentUser {\n    getCurrentUser {\n      _id\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query forum($_id: String!) {\n    forum(_id: $_id) {\n      ...ForumFragment\n    }\n  }\n"): (typeof documents)["\n  query forum($_id: String!) {\n    forum(_id: $_id) {\n      ...ForumFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query forums {\n    forums {\n      ...ForumFragment\n    }\n  }\n"): (typeof documents)["\n  query forums {\n    forums {\n      ...ForumFragment\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;