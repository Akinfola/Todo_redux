// src/components/TodoCounter.tsx
import { Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const TodoCounter = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const filter = useSelector((state: RootState) => state.filter);

  // apply filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "ACTIVE") return !todo.completed;
    if (filter === "COMPLETED") return todo.completed;
    return true; // ALL
  });

  return (
    <Box mt={2}>
      <Typography variant="subtitle1" color="textSecondary">
        Showing <strong>{filteredTodos.length}</strong> of{" "}
        <strong>{todos.length}</strong> todos
      </Typography>
    </Box>
  );
};

export default TodoCounter;
