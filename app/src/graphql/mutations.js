/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVideoList = /* GraphQL */ `
  mutation CreateVideoList(
    $input: CreateVideoListInput!
    $condition: ModelVideoListConditionInput
  ) {
    createVideoList(input: $input, condition: $condition) {
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
export const updateVideoList = /* GraphQL */ `
  mutation UpdateVideoList(
    $input: UpdateVideoListInput!
    $condition: ModelVideoListConditionInput
  ) {
    updateVideoList(input: $input, condition: $condition) {
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
export const deleteVideoList = /* GraphQL */ `
  mutation DeleteVideoList(
    $input: DeleteVideoListInput!
    $condition: ModelVideoListConditionInput
  ) {
    deleteVideoList(input: $input, condition: $condition) {
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
export const createInAppMessaging = /* GraphQL */ `
  mutation CreateInAppMessaging(
    $input: CreateInAppMessagingInput!
    $condition: ModelInAppMessagingConditionInput
  ) {
    createInAppMessaging(input: $input, condition: $condition) {
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
export const updateInAppMessaging = /* GraphQL */ `
  mutation UpdateInAppMessaging(
    $input: UpdateInAppMessagingInput!
    $condition: ModelInAppMessagingConditionInput
  ) {
    updateInAppMessaging(input: $input, condition: $condition) {
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
export const deleteInAppMessaging = /* GraphQL */ `
  mutation DeleteInAppMessaging(
    $input: DeleteInAppMessagingInput!
    $condition: ModelInAppMessagingConditionInput
  ) {
    deleteInAppMessaging(input: $input, condition: $condition) {
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
export const createRequestVideo = /* GraphQL */ `
  mutation CreateRequestVideo(
    $input: CreateRequestVideoInput!
    $condition: ModelRequestVideoConditionInput
  ) {
    createRequestVideo(input: $input, condition: $condition) {
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
export const updateRequestVideo = /* GraphQL */ `
  mutation UpdateRequestVideo(
    $input: UpdateRequestVideoInput!
    $condition: ModelRequestVideoConditionInput
  ) {
    updateRequestVideo(input: $input, condition: $condition) {
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
export const deleteRequestVideo = /* GraphQL */ `
  mutation DeleteRequestVideo(
    $input: DeleteRequestVideoInput!
    $condition: ModelRequestVideoConditionInput
  ) {
    deleteRequestVideo(input: $input, condition: $condition) {
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
