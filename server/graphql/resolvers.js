const { getAllUsers, deleteUserById, getUserById, } = require('../controllers/user-controller')
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask } = require('../controllers/todo-controller');
const { loginUser, registerUser } = require('../controllers/auth-controller');
const { updateProject, deleteProject, createProject, getAllProjects, getProjectById} = require('../controllers/project-controller');

const resolvers = {
  Query: {
    users: async (_, { }, context) => await getAllUsers(),
    user: async (_, { id }) => await getUserById(id),


    todos: async (_,{assignee}) => await getAllTasks(assignee),
    todo: async (_, { id }) => await getTaskById(id),

    projects: async (_,{userId}) => await getAllProjects(userId),
    project: async (_, { id }) => await getProjectById(id),
  },


  Mutation: {
    registerUser: async (_, { firstName, lastName, email, password }) => { 
      
      return await registerUser(firstName, lastName, email, password) },

    deleteUser: async (_, { id }) => await deleteUserById(id),
    loginUser: async (_, { email, password }) => await loginUser( email, password ),

    createTodo: async (_, { title, complete, description, assignee, dueDate, priority, projectId, userId}) => await createTask(title, description, assignee, dueDate, priority, projectId, userId, complete),
    updateTodo: async (_, {id, title, description, assignee, dueDate, priority, complete}) => await updateTask(id, title, description, assignee, dueDate, priority, complete),
    deleteTodo: async (_, { deleteTodo }) => await deleteTask(id),


    createProject: async (_, { name, description, userId }) => await createProject(name, description, userId),
    updateProject: async (_, {id, name, description, }) => await updateProject(id, name, description),
    deleteProject: async (_, { id }) => await deleteProject(id),
  }
};

module.exports = resolvers;