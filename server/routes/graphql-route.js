const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../graphql/typeDefs');
const resolvers = require('../graphql/resolvers');

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async (app) => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql' });
};

module.exports = startApolloServer;