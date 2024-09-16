const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName:  String!
    email: String!
    password: String!
    salt: String!
  }


type Auth {
  id: ID!
  token: String!
}

  type Todo {
    id: ID!
    description: String!
    assignee: String!
    dueDate: String!
    priority: String!
    projectId: ID!
    createdAt: String!
    updatedAt: String!
  }


  type Query {
    users: [User]
    user(id: ID!): User

    todos: [Todo]
    todo(id: ID!): Todo
  }


  type Mutation {
    registerUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    deleteUser(id: ID!): String
    loginUser(email: String!, password: String!): Auth

    
    #todos
    createTodo(description: String!, assignee: String!, dueDate: String!, priority: String!, projectId: ID!): Todo
    deleteTodo(id: ID!): String
  }
`;

module.exports = typeDefs;