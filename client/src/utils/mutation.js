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
