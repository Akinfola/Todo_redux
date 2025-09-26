// src/components/TodoList.tsx
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { toggleTodo, deleteTodo } from "./store";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos);
  const filter = useSelector((state: RootState) => state.filter);

  // Apply filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "ACTIVE") return !todo.completed;
    if (filter === "COMPLETED") return todo.completed;
    return true; // ALL
  });

  return (
    <List>
      {filteredTodos.map((todo) => (
        <ListItem
          key={todo.id}
          secondaryAction={
            <IconButton
              edge="end"
              color="error"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <Checkbox
            edge="start"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <ListItemText
            primary={todo.text}
            sx={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "gray" : "inherit",
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
