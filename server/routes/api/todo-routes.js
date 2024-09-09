const router = require('express').Router();
const { authenticate } = require('../../middleware/auth.middleware');
const { getAllTasks, createTask, updateTask, deleteTask } = require('../../controllers/todo-controllers');

// GET all tasks for a specific project
router.route('/:projectId').get(getAllTasks);

// POST a new task
router.route('/').post(createTask);

// PUT to update an existing task
router.route('/:id').put(updateTask);

// DELETE a task
router.route('/:id').delete(deleteTask);

module.exports = router;
