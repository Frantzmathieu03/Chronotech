import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_TODO, DELETE_TODO } from "../utils/mutation";
import { useLocation } from 'react-router-dom';
import auth from "../utils/auth";
import { GET_ALL_TODO } from "../utils/queries";


const Dashboard = () => {
  // const [user, setUser] = useState();
  
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const [createTodo, {err}]= useMutation(CREATE_TODO);
  const [deleteTodo, {e}]= useMutation(DELETE_TODO);
  const location = useLocation();

  // Create a URLSearchParams object using the search property of the location
  const queryParams = new URLSearchParams(location.search);
const projectId = queryParams.get('project');
const user = auth.getUser();
console.log(user)
const { data, loading, refetch } = useQuery(GET_ALL_TODO, { variables: { assignee: user?.firstName }, skip: !user?.id });
console.log(data)
//   useEffect(() => {
//     const user = auth.getUser();
//     setUser(user);
// }, []);

  

  const handleAddTask = async() => {
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      assignee,
      priority: "high",
      dueDate: taskDate,
      complete: false,
      userId: user?.id,
      projectId
    };
    
    console.log(newTask)
    await createTodo({variables: newTask})

    setTaskTitle("");
    setTaskDescription("");
    setAssignee("");
    setTaskDate("");
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = data?.projects.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks.sort((a, b) => a.completed - b.completed));
  };

  const handleDeleteTask = (id) => {
  
    deleteTodo({variables:{deleteTodo:id}});
    refetch()
  };

  const styles = {
    dashboard: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      backgroundColor: "#f5f5f5",
      height: "100vh",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Helvetica Neue', sans-serif",
      color: "#333",
    },
    taskCreation: {
      width: "45%",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    heading: {
      marginBottom: "20px",
      fontSize: "24px",
      color: "#333",
      fontWeight: "500",
    },
    input: {
      width: "80%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      backgroundColor: "#fff",
      color: "#333",
      fontFamily: "inherit",
    },
    textarea: {
      width: "80%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      backgroundColor: "#fff",
      color: "#333",
      fontFamily: "inherit",
    },
    button: {
      width: "80%",
      padding: "10px",
      backgroundColor: "orange",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      fontFamily: "inherit",
      cursor: "pointer",
    },
    taskList: {
      width: "45%",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    noTasks: {
      fontSize: "14px",
      color: "#999",
      fontFamily: "inherit",
    },
    ul: {
      listStyleType: "none",
      padding: 0,
    },
    taskItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
    },
    checkbox: {
      marginRight: "10px",
    },
    taskContent: {
      flexGrow: 1,
    },
    taskTitle: {
      margin: "0 0 5px 0",
      fontSize: "18px",
      fontFamily: "inherit",
      textDecoration: "none",
    },
    taskText: {
      margin: "0 0 5px 0",
      fontSize: "14px",
      color: "#666",
      fontFamily: "inherit",
    },
    deleteButton: {
      backgroundColor: "#22179e",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "5px 10px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.dashboard}>
      <div style={styles.taskCreation}>
        <h2 style={styles.heading}>Create a Task</h2>
        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          style={styles.textarea}
        />
        <input
          type="text"
          placeholder="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          style={styles.input}
        />
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.button}>
          Add Task
        </button>
      </div>

      <div style={styles.taskList}>
        <h2 style={styles.heading}>Task List</h2>
        {loading? (
          <p style={styles.noTasks}>No tasks available</p>
        ) : (
          <ul style={styles.ul}>
            {data?.projects.map((task) => (
              <li key={task.id} style={styles.taskItem}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task.id)}
                  style={styles.checkbox}
                />
                <div style={styles.taskContent}>
                  <h3
                    style={{
                      ...styles.taskTitle,
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                  >
                    {task.title}
                  </h3>
                  <p style={styles.taskText}>{task.description}</p>
                  <p style={styles.taskText}>Assigned to: {task.assignee}</p>
                  <p style={styles.taskText}>Due: {new Date(task.date).toDateString()}</p>
                </div>
                <button
                  onClick={() => handleDeleteTask(task._id)}
                  style={styles.deleteButton}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
