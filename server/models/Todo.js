const { Schema, model } = require('mongoose');

const todoSchema = new Schema({

    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    assignee: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium',
    },
    projectId: {
        type: String,
        required: true,
    },


    complete: {
        type: Boolean,
        required: false,
        default: false,
    },

    userId: {
        type: String,
        required: true,
    },

}, {
    timestamps: true,
});

const Todo = model('Todo', todoSchema);
module.exports = Todo;
