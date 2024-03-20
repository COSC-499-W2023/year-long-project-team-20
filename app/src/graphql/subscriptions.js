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
export const onUpdateInAppMessaging = /* GraphQL */ `
  subscription OnUpdateInAppMessaging(
    $filter: ModelSubscriptionInAppMessagingFilterInput
  ) {
    onUpdateInAppMessaging(filter: $filter) {
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
export const onDeleteInAppMessaging = /* GraphQL */ `
  subscription OnDeleteInAppMessaging(
    $filter: ModelSubscriptionInAppMessagingFilterInput
  ) {
    onDeleteInAppMessaging(filter: $filter) {
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
export const onCreateRequestVideo = /* GraphQL */ `
  subscription OnCreateRequestVideo(
    $filter: ModelSubscriptionRequestVideoFilterInput
  ) {
    onCreateRequestVideo(filter: $filter) {
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
export const onUpdateRequestVideo = /* GraphQL */ `
  subscription OnUpdateRequestVideo(
    $filter: ModelSubscriptionRequestVideoFilterInput
  ) {
    onUpdateRequestVideo(filter: $filter) {
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
export const onDeleteRequestVideo = /* GraphQL */ `
  subscription OnDeleteRequestVideo(
    $filter: ModelSubscriptionRequestVideoFilterInput
  ) {
    onDeleteRequestVideo(filter: $filter) {
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
