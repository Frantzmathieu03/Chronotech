import {gql} from '@apollo/client'


export const GET_ALL_PROJECTS = gql`
query Projects($userId: ID!) {
    projects(userId: $userId) {
      id
      name
      description
      createdAt
      updatedAt
      userId
    }
  }
`