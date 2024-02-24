/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVideoList = /* GraphQL */ `
  subscription OnCreateVideoList(
    $filter: ModelSubscriptionVideoListFilterInput
  ) {
    onCreateVideoList(filter: $filter) {
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
export const onUpdateVideoList = /* GraphQL */ `
  subscription OnUpdateVideoList(
    $filter: ModelSubscriptionVideoListFilterInput
  ) {
    onUpdateVideoList(filter: $filter) {
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
export const onDeleteVideoList = /* GraphQL */ `
  subscription OnDeleteVideoList(
    $filter: ModelSubscriptionVideoListFilterInput
  ) {
    onDeleteVideoList(filter: $filter) {
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
export const onCreateInAppMessaging = /* GraphQL */ `
  subscription OnCreateInAppMessaging(
    $filter: ModelSubscriptionInAppMessagingFilterInput
  ) {
    onCreateInAppMessaging(filter: $filter) {
      id
      text
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInAppMessaging = /* GraphQL */ `
  subscription OnUpdateInAppMessaging(
    $filter: ModelSubscriptionInAppMessagingFilterInput
  ) {
    onUpdateInAppMessaging(filter: $filter) {
      id
      text
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInAppMessaging = /* GraphQL */ `
  subscription OnDeleteInAppMessaging(
    $filter: ModelSubscriptionInAppMessagingFilterInput
  ) {
    onDeleteInAppMessaging(filter: $filter) {
      id
      text
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
