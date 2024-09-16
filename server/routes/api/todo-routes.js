const router = require('express').Router();
const { authenticate } = require('../../middleware/auth.middleware');
const { getAllTasks, createTask, updateTask, deleteTask } = require('../../controllers/todo-controller');

// GET all tasks for a specific project
router.route('/:projectId').get(authenticate, getAllTasks);

// POST a new task
router.route('/').post(authenticate, createTask);

// PUT to update an existing task
router.route('/:id').put(authenticate, updateTask);

// DELETE a task
router.route('/:id').delete(authenticate, deleteTask);

module.exports = router;

