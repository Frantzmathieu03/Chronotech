const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../graphql/typeDefs');
const resolvers = require('../graphql/resolvers');
const {authenticate} = require('../middleware/auth.middleware')


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context:authenticate
});

const startApolloServer = async (app) => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql' });
};

module.exports = startApolloServer;