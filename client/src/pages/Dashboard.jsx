import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
    const storedMode = localStorage.getItem("isDarkMode");
    if (storedMode) {
      setIsDarkMode(JSON.parse(storedMode));
    }
  }, []);

  // Save tasks and dark mode setting to localStorage whenever tasks or mode change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [tasks, isDarkMode]);

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      assignee,
      date: taskDate,
      completed: false,
    };
    setTasks((prevTasks) =>
      [...prevTasks, newTask].sort((a, b) => new Date(a.date) - new Date(b.date))
    );
    setTaskTitle("");
    setTaskDescription("");
    setAssignee("");
    setTaskDate("");
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks.sort((a, b) => a.completed - b.completed));
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Styles for dark and light modes
  const styles = {
    dashboard: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      backgroundColor: isDarkMode ? "#1c1c1c" : "#f5f5f5",
      height: "100vh",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Helvetica Neue', sans-serif",
      color: isDarkMode ? "#e0e0e0" : "#333",
    },
    taskCreation: {
      width: "45%",
      padding: "20px",
      backgroundColor: isDarkMode ? "#333" : "white",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    heading: {
      marginBottom: "20px",
      fontSize: "24px",
      color: isDarkMode ? "#e0e0e0" : "#333",
      fontWeight: "500",
    },
    input: {
      width: "80%",
      padding: "10px",
      marginBottom: "10px",
      border: isDarkMode ? "1px solid #444" : "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      backgroundColor: isDarkMode ? "#444" : "white",
      color: isDarkMode ? "#e0e0e0" : "#333",
      fontFamily: "inherit",
    },
    textarea: {
      width: "80%",
      padding: "10px",
      marginBottom: "10px",
      border: isDarkMode ? "1px solid #444" : "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      backgroundColor: isDarkMode ? "#444" : "white",
      color: isDarkMode ? "#e0e0e0" : "#333",
      fontFamily: "inherit",
    },
    button: {
      width: "80%",
      padding: "10px",
      backgroundColor: isDarkMode ? "#6a5acd" : "orange",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      fontFamily: "inherit",
      cursor: "pointer",
    },
    toggleButton: {
      marginTop: "10px",
      padding: "8px 12px",
      backgroundColor: isDarkMode ? "#444" : "#ddd",
      color: isDarkMode ? "#e0e0e0" : "#333",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      alignSelf: "center",
    },
    taskList: {
      width: "45%",
      padding: "20px",
      backgroundColor: isDarkMode ? "#333" : "white",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    noTasks: {
      fontSize: "14px",
      color: isDarkMode ? "#888" : "#999",
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
      border: isDarkMode ? "1px solid #444" : "1px solid #ddd",
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
      textDecoration: isDarkMode ? "none" : "line-through",
    },
    taskText: {
      margin: "0 0 5px 0",
      fontSize: "14px",
      color: isDarkMode ? "#e0e0e0" : "#666",
      fontFamily: "inherit",
    },
    deleteButton: {
      backgroundColor: "#ff6b6b",
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
        <button onClick={toggleDarkMode} style={styles.toggleButton}>
          Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      <div style={styles.taskList}>
        <h2 style={styles.heading}>Task List</h2>
        {tasks.length === 0 ? (
          <p style={styles.noTasks}>No tasks available</p>
        ) : (
          <ul style={styles.ul}>
            {tasks.map((task) => (
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
                  onClick={() => handleDeleteTask(task.id)}
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
