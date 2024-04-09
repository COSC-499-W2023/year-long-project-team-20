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
export const getRequestVideo = /* GraphQL */ `
  query GetRequestVideo($created: AWSDateTime!) {
    getRequestVideo(created: $created) {
      created
      duedate
      from
      to
      fromEmail
      toEmail
      isRead
      isCompleted
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRequestVideos = /* GraphQL */ `
  query ListRequestVideos(
    $created: AWSDateTime
    $filter: ModelRequestVideoFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRequestVideos(
      created: $created
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        created
        duedate
        from
        to
        fromEmail
        toEmail
        isRead
        isCompleted
        message
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const requestVideosByToAndCreated = /* GraphQL */ `
  query RequestVideosByToAndCreated(
    $to: String!
    $created: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRequestVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    requestVideosByToAndCreated(
      to: $to
      created: $created
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        created
        duedate
        from
        to
        fromEmail
        toEmail
        isRead
        isCompleted
        message
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const requestVideosByToAndDuedate = /* GraphQL */ `
  query RequestVideosByToAndDuedate(
    $to: String!
    $duedate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRequestVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    requestVideosByToAndDuedate(
      to: $to
      duedate: $duedate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        created
        duedate
        from
        to
        fromEmail
        toEmail
        isRead
        isCompleted
        message
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
