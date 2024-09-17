const { Todo } = require('../models');

// Get all tasks for a project
const getAllTasks = async (assignee) => {
    try {
        const tasks = await Todo.find({ assignee });
        return tasks
    } catch (err) {
        return err
    }
};

const getTaskById = async (id) => {
    try {
        const task = await Todo.findById(id);
        return task
    } catch (err) {
        return err
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
const updateTask = async (id, description, assignee, dueDate, priority) => {
    try {
        const updatedTask = await Todo.findByIdAndUpdate(id, {description, assignee, dueDate, priority}, { new: true });
        return updatedTask
    } catch (err) {
        return err
    }
};

// Delete a task
const deleteTask = async (id) => {
    try {
        const deletedTask = await Todo.findByIdAndDelete(id);
        return deletedTask
    } catch (err) {
        return err
    }
};

module.exports = { getAllTasks,getTaskById, createTask, updateTask, deleteTask };
