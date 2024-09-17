const { getAllUsers, deleteUserById, getUserById, } = require('../controllers/user-controller')
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask } = require('../controllers/todo-controller');
const { loginUser, registerUser } = require('../controllers/auth-controller');

const resolvers = {
  Query: {
    users: async (_, { }, context) => await getAllUsers(),
    user: async (_, { id }) => await getUserById(id),


    todos: async (_,{assignee}) => await getAllTasks(assignee),
    todo: async (_, { id }) => await getTaskById(id),
  },


  Mutation: {
    registerUser: async (_, { firstName, lastName, email, password }) => { 
      
      return await registerUser(firstName, lastName, email, password) },

    deleteUser: async (_, { id }) => await deleteUserById(id),
    loginUser: async (_, { email, password }) => await loginUser( email, password ),

    createTodo: async (_, { description, assignee, dueDate, priority }) => await createTask(description, assignee, dueDate, priority),
    updateTodo: async (_, {id, description, assignee, dueDate, priority}) => await updateTask(id, description, assignee, dueDate, priority),
    deleteTodo: async (_, { id }) => await deleteTask(id),
  }
};

module.exports = resolvers;