const {getAllUsers, createUser, deleteUserById, getUserById} = require('../controllers/user-controller')


const resolvers = {
    Query: {
      users: async () => await getAllUsers(),
      user: async (_, { id }) => await getUserById(id),
    },
    Mutation: {
      createUser: async (_, { firstName, lastName, email, password }) => await createUser(firstName, lastName, email, password),
      deleteUser: async (_, { id }) => await deleteUserById(id),
    }
  };
  
  module.exports = resolvers;