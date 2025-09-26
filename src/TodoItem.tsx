// src/components/TodoItem.tsx
import { ListItem, Checkbox, IconButton, ListItemText, useTheme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, AppDispatch } from "./store";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoItem({ id, text, completed }: TodoItemProps) {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label={`Delete ${text}`}
          color="error"
          onClick={() => dispatch(deleteTodo(id))}
        >
          <DeleteIcon />
        </IconButton>
      }
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        mb: 0.5,
        borderRadius: 1,
      }}
    >
      <Checkbox
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <ListItemText
        primary={text}
        sx={{
          textDecoration: completed ? "line-through" : "none",
          color: completed ? theme.palette.text.disabled : theme.palette.text.primary,
        }}
      />
    </ListItem>
  );
}
