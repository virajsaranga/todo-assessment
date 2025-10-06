import React, { useState } from "react";
import { TextField, Button, Box, Paper } from "@mui/material";

function TaskForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required");
    await onCreate(title, description);
    setTitle("");
    setDesc("");
  };

  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Task Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Box textAlign="right" mt={2}>
          <Button type="submit" variant="contained">
            Add Task
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default TaskForm;
