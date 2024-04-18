/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEngagementLogger = /* GraphQL */ `
  query GetEngagementLogger($id: ID!) {
    getEngagementLogger(id: $id) {
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
export const listEngagementLoggers = /* GraphQL */ `
  query ListEngagementLoggers(
    $filter: ModelEngagementLoggerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEngagementLoggers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user_hash_key
        sites_visited
        last_updated
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
