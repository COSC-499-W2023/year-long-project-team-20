/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo(
    $filter: ModelSubscriptionVideoFilterInput
    $owner: String
  ) {
    onCreateVideo(filter: $filter, owner: $owner) {
      id
      link
      Date
      sentBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo(
    $filter: ModelSubscriptionVideoFilterInput
    $owner: String
  ) {
    onUpdateVideo(filter: $filter, owner: $owner) {
      id
      link
      Date
      sentBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo(
    $filter: ModelSubscriptionVideoFilterInput
    $owner: String
  ) {
    onDeleteVideo(filter: $filter, owner: $owner) {
      id
      link
      Date
      sentBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
