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
      VideoLink
      VideoName
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
      VideoLink
      VideoName
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
      VideoLink
      VideoName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateShareVideo = /* GraphQL */ `
  subscription OnCreateShareVideo(
    $filter: ModelSubscriptionShareVideoFilterInput
    $owner: String
  ) {
    onCreateShareVideo(filter: $filter, owner: $owner) {
      id
      From
      To
      Link
      Description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateShareVideo = /* GraphQL */ `
  subscription OnUpdateShareVideo(
    $filter: ModelSubscriptionShareVideoFilterInput
    $owner: String
  ) {
    onUpdateShareVideo(filter: $filter, owner: $owner) {
      id
      From
      To
      Link
      Description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteShareVideo = /* GraphQL */ `
  subscription OnDeleteShareVideo(
    $filter: ModelSubscriptionShareVideoFilterInput
    $owner: String
  ) {
    onDeleteShareVideo(filter: $filter, owner: $owner) {
      id
      From
      To
      Link
      Description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
