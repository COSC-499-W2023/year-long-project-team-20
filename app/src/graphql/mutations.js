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
      VideoLink
      VideoName
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
      VideoLink
      VideoName
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
      VideoLink
      VideoName
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
      text
      email
      senderEmail
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
      text
      email
      senderEmail
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
      text
      email
      senderEmail
      createdAt
      updatedAt
      __typename
    }
  }
`;
