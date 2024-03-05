/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
