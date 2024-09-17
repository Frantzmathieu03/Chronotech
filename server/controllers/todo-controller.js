const { Todo } = require('../models');

// Get all tasks for a project
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Todo.find({ projectId: req.params.projectId });
        res.json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Create a new task
const createTask = async (description, assignee, dueDate, priority) => {
    try {
        const newTask = await Todo.create({description, assignee, dueDate, priority});
        return newTask
    } catch (err) {
        return (err);
    }
};

// Update a task
const updateTask = async (req, res) => {
    try {
        const updatedTask = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Todo.findByIdAndDelete(req.params.id);
        res.json(deletedTask);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
