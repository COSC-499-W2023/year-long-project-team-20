/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVideoList = /* GraphQL */ `
  query GetVideoList($id: ID!) {
    getVideoList(id: $id) {
      id
      User
      UserID
      VideoName
      VideoLink
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listVideoLists = /* GraphQL */ `
  query ListVideoLists(
    $filter: ModelVideoListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        User
        UserID
        VideoName
        VideoLink
        Description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInAppMessaging = /* GraphQL */ `
  query GetInAppMessaging($id: ID!) {
    getInAppMessaging(id: $id) {
      id
      from
      to
      link
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInAppMessagings = /* GraphQL */ `
  query ListInAppMessagings(
    $filter: ModelInAppMessagingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInAppMessagings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        from
        to
        link
        Description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
