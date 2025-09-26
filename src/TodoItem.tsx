// src/components/TodoItem.tsx
import { ListItem, Checkbox, IconButton, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./store";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem = ({ id, text, completed }: TodoItemProps) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => dispatch(deleteTodo(id))}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <ListItemText
        primary={text}
        style={{
          textDecoration: completed ? "line-through" : "none",
          opacity: completed ? 0.6 : 1,
        }}
      />
    </ListItem>
  );
};

export default TodoItem;
