/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVideoList = /* GraphQL */ `
  query GetVideoList($id: ID!) {
    getVideoList(id: $id) {
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
        VideoLink
        VideoName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getShareVideo = /* GraphQL */ `
  query GetShareVideo($id: ID!) {
    getShareVideo(id: $id) {
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
export const listShareVideos = /* GraphQL */ `
  query ListShareVideos(
    $filter: ModelShareVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShareVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
