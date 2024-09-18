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
const createTask = async (title, description, assignee, dueDate, priority, projectId, userId, complete) => {
    try {
        const newTask = new Todo({title, description, assignee, dueDate, priority, projectId, userId, complete});
        await newTask.save()
        return newTask
    } catch (err) {
        return (err);
    }
};

// Update a task
const updateTask = async (id, title, description, assignee, dueDate, priority, complete) => {
    try {
        const updatedTask = await Todo.findByIdAndUpdate(id, {title, description, assignee, dueDate, priority, complete}, { new: true });
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
