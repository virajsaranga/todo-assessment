import React, { useState, useEffect } from "react";
import { Container, Typography, Alert } from "@mui/material";
import { fetchTasks, createTask, completeTask } from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  async function loadTasks() {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleCreate(title, description) {
    try {
      await createTask({ title, description });
      await loadTasks();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleComplete(id) {
    try {
      await completeTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        To-Do (Latest 5)
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <TaskForm onCreate={handleCreate} />
      <TaskList tasks={tasks} onComplete={handleComplete} />
    </Container>
  );
}

export default App;
