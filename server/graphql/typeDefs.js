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

type Project {
  id: ID!
  name: String!
  description: String!
  userId: String!
  createdAt: String!
  updatedAt: String!
}

  type Todo {
    id: ID!
    description: String!
    assignee: String!
    projectId: String!
    dueDate: String!
    priority: String!
    createdAt: String!
    updatedAt: String!
  }


  type Query {
    users: [User]
    user(id: ID!): User

    todos(assignee:String!): [Todo]
    todo(id: ID!): Todo

    projects(userId: ID!): [Project]
    project(id: ID): Project
  }


  type Mutation {
    registerUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    deleteUser(id: ID!): String
    loginUser(email: String!, password: String!): Auth

    
    #todos
    createTodo(description: String!, assignee: String!, dueDate: String!, priority: String!): Todo
    updateTodo(id: ID!, description: String!, assignee: String!, dueDate: String!, priority: String!): Todo
    deleteTodo(id: ID!): String

    #project
    createProject(name: String!, description: String!, userId: String!): Project
    updateProject(id: ID!, name: String, description: String): Project
    deleteProject(id: ID!): String

  }
`;

module.exports = typeDefs;