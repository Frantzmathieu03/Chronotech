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