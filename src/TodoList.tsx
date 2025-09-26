// src/components/TodoList.tsx
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todoApp.todos);
  const filter = useSelector((state: RootState) => state.todoApp.filter);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ACTIVE") return !todo.completed;
    if (filter === "COMPLETED") return todo.completed;
    return true;
  });

  return (
    <List>
      {filteredTodos.length === 0 ? (
        <p style={{ textAlign: "center" }}>No todos to display</p>
      ) : (
        filteredTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      )}
    </List>
  );
}
