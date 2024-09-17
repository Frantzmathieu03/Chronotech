const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
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
    // projectId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Project',
    //     required: true,
    // },
}, {
    timestamps: true,
});

const Todo = model('Todo', todoSchema);
module.exports = Todo;
