// src/store.ts
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = { id: number; text: string; completed: boolean };
type Filter = "ALL" | "ACTIVE" | "COMPLETED";

interface State {
  todos: Todo[];
  filter: Filter;
}

// ✅ Default sample todos
const initialState: State = {
  todos: [
    { id: 1, text: "Learn Redux", completed: false },
    { id: 2, text: "Build Todo App", completed: true },
    { id: 3, text: "Celebrate progress 🎉", completed: false },
  ],
  filter: "ALL",
};

const todoSlice = createSlice({
  name: "todoApp",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter } = todoSlice.actions;

export const store = configureStore({
  reducer: todoSlice.reducer,
});

// ✅ Types for Redux hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
