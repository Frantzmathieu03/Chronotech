const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    
   
}, {
    timestamps: true,
});

const Project = model('Project', projectSchema);
module.exports = Project;