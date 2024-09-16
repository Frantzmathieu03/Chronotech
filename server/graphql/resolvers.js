const { getAllUsers, deleteUserById, getUserById, } = require('../controllers/user-controller')
const { getAllTodos, createTodo, deleteTodoById, getTodoById } = require('../controllers/todo-controller');
const { loginUser, registerUser } = require('../controllers/auth-controller');

const resolvers = {
  Query: {
    users: async (_, { }, context) => await getAllUsers(),
    user: async (_, { id }) => await getUserById(id),


    todos: async () => await getAllTodos(),
    todo: async (_, { id }) => await getTodoById(id),
  },


  Mutation: {
    registerUser: async (_, { firstName, lastName, email, password }) => { 
      
      return await registerUser(firstName, lastName, email, password) },

    deleteUser: async (_, { id }) => await deleteUserById(id),
    loginUser: async (_, { email, password }) => await loginUser( email, password ),

    createTodo: async (_, { description, assignee, dueDate, priority, projectId }) => await createTodo(description, assignee, dueDate, priority, projectId),
    deleteTodo: async (_, { id }) => await deleteTodoById(id),
  }
};

module.exports = resolvers;