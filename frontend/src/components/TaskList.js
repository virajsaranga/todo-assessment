import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";

function TaskList({ tasks, onComplete }) {
  if (!tasks.length) {
    return (
      <Typography variant="body1" color="text.secondary">
        No tasks available
      </Typography>
    );
  }

  return (
    <Stack spacing={2}>
      {tasks.map((task) => (
        <Card key={task.id} variant="outlined">
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">{task.title}</Typography>
              <Button
                variant="contained"
                color="success"
                onClick={() => onComplete(task.id)}
              >
                Done
              </Button>
            </Box>
            {task.description && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                {task.description}
              </Typography>
            )}
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mt: 1 }}
            >
              {new Date(task.created_at).toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default TaskList;
