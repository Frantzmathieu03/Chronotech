import {gql} from '@apollo/client'

export const REGISTER_USER = gql`
mutation RegisterUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    registerUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      id
      token
    }
  }
`;

export const LOGIN = gql`
mutation LoginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    id
    token
  }
}`


export const  CREATE_PROJECT = gql`
mutation CreateProject($name: String!, $description: String!, $userId: String!) {
  createProject(name: $name, description: $description, userId: $userId) {
    description
    name
    id
  }
}
`

export const  UPDATE_PROJECT = gql`
mutation UpdateProject($name: String!, $description: String!, $userId: String!) {
  updateProject(name: $name, description: $description, userId: $userId) {
    description
    name
    id
  }
}
`

export const  CREATE_TODO = gql`
mutation CreateTodo($title: String!, $description: String!, $assignee: String!, $dueDate: String!, $priority: String!, $userId: String, $complete: Boolean, $projectId: String) {
  createTodo(title: $title, description: $description, assignee: $assignee, dueDate: $dueDate, priority: $priority, userId: $userId, complete: $complete, projectId: $projectId) {
    assignee
    complete
    createdAt
    description
    dueDate
    id
    priority
    projectId
    userId
    updatedAt
    title
  }
}
`

export const  UPDATE_TODO = gql`
mutation UpdateTodo($updateTodoId: ID!, $description: String!, $assignee: String!, $dueDate: String!, $priority: String!) {
  updateTodo(id: $updateTodoId, description: $description, assignee: $assignee, dueDate: $dueDate, priority: $priority) {
    assignee
    createdAt
    description
    id
    dueDate
    priority
  }
}
`

export const  DELETE_TODO = gql`
mutation DeleteTodo($deleteTodoId: ID!) {
  deleteTodo(id: $deleteTodoId)
}
`