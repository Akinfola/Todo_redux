// src/components/TodoCounter.tsx
import { Typography, Box, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export default function TodoCounter() {
  const todos = useSelector((state: RootState) => state.todoApp.todos);
  const filter = useSelector((state: RootState) => state.todoApp.filter);
  const theme = useTheme();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ACTIVE") return !todo.completed;
    if (filter === "COMPLETED") return todo.completed;
    return true;
  });

  return (
    <Box mt={2}>
      <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>
        Showing <strong>{filteredTodos.length}</strong> of <strong>{todos.length}</strong> todos
      </Typography>
    </Box>
  );
}
