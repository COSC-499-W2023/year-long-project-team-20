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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createShareVideo = /* GraphQL */ `
  mutation CreateShareVideo(
    $input: CreateShareVideoInput!
    $condition: ModelShareVideoConditionInput
  ) {
    createShareVideo(input: $input, condition: $condition) {
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
export const updateShareVideo = /* GraphQL */ `
  mutation UpdateShareVideo(
    $input: UpdateShareVideoInput!
    $condition: ModelShareVideoConditionInput
  ) {
    updateShareVideo(input: $input, condition: $condition) {
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
export const deleteShareVideo = /* GraphQL */ `
  mutation DeleteShareVideo(
    $input: DeleteShareVideoInput!
    $condition: ModelShareVideoConditionInput
  ) {
    deleteShareVideo(input: $input, condition: $condition) {
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
