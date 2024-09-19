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


export const GET_ALL_TODO = gql`
query Todos($assignee: String!) {
  todos(assignee: $assignee) {
    assignee
    complete
    createdAt
    description
    dueDate
    id
    priority
    projectId
    title
    updatedAt
    userId
  }
}
`

