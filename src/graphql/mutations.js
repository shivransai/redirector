/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEngagementLogger = /* GraphQL */ `
  mutation CreateEngagementLogger(
    $input: CreateEngagementLoggerInput!
    $condition: ModelEngagementLoggerConditionInput
  ) {
    createEngagementLogger(input: $input, condition: $condition) {
      id
      user_hash_key
      sites_visited
      last_updated
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEngagementLogger = /* GraphQL */ `
  mutation UpdateEngagementLogger(
    $input: UpdateEngagementLoggerInput!
    $condition: ModelEngagementLoggerConditionInput
  ) {
    updateEngagementLogger(input: $input, condition: $condition) {
      id
      user_hash_key
      sites_visited
      last_updated
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEngagementLogger = /* GraphQL */ `
  mutation DeleteEngagementLogger(
    $input: DeleteEngagementLoggerInput!
    $condition: ModelEngagementLoggerConditionInput
  ) {
    deleteEngagementLogger(input: $input, condition: $condition) {
      id
      user_hash_key
      sites_visited
      last_updated
      createdAt
      updatedAt
      __typename
    }
  }
`;
