const { Project } = require('../models');

// Get all projects for a project
const getAllProjects = async (userId) => {
    try {
        const projects = await Project.find({ userId});
        return projects
    } catch (err) {
        return err
    }
};

const getProjectById = async (id) => {
    try {
        const project = await Project.findById(id);
        return project
    } catch (err) {
        return err
    }
};


// Create a new project
const createProject = async (name, description, userId) => {
    try {
        const newProject = new Project({name, description, userId}); 
        await newProject.save()
        return newProject
    } catch (err) {
        return (err);
    }
};

// Update a project
const updateProject = async (id, name, description) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(id, {name, description}, { new: true });
        return updatedProject
    } catch (err) {
        return err
    }
};

// Delete a project
const deleteProject = async (id) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(id);
        return deletedProject
    } catch (err) {
        return err
    }
};

module.exports = { getAllProjects, getProjectById, createProject, updateProject, deleteProject };
