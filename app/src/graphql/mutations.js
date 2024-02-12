/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInAppMessaging = /* GraphQL */ `
  mutation CreateInAppMessaging(
    $input: CreateInAppMessagingInput!
    $condition: ModelInAppMessagingConditionInput
  ) {
    createInAppMessaging(input: $input, condition: $condition) {
      id
      text
      email
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
