
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TodoList from './todoList';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchTasks = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                history.push('/login');
                return;
            }
            try {
                const response = await fetch('/api/todo/your-project-id', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch tasks');
                }

                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error('Failed to fetch tasks:', error);
            }
        };

        fetchTasks();
    }, [history]);

    return (
        <div>
            <h1>Dashboard</h1>
            <TodoList tasks={tasks} />
        </div>
    );
};

export default Dashboard;
