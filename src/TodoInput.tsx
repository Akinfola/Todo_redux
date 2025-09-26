// src/components/TodoInput.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, AppDispatch } from "./store";
import { Box, TextField, Button, useTheme } from "@mui/material";

export default function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme(); // get current theme

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text.trim()));
    setText("");
  };

  return (
    <Box display="flex" mb={2}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo..."
        variant="outlined"
        size="small"
        fullWidth
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        sx={{
          input: { color: theme.palette.text.primary },
          bgcolor: theme.palette.background.default,
          borderRadius: 1,
        }}
      />
      <Button
        variant="contained"
        onClick={handleAdd}
        sx={{ ml: 1 }}
      >
        Add
      </Button>
    </Box>
  );
}
