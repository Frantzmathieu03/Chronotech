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
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });
  } 
};

module.exports = startApolloServer;