import React from 'react';

const TodoList = ({ tasks }) => {
    return (
        <div>
            <h3>Tasks</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        <h4>{task.description}</h4>
                        <p>Assignee: {task.assignee}</p>
                        <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
                        <p>Priority: {task.priority}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
