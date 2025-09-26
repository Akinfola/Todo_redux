// src/App.tsx
import React, { useContext } from "react";
import { Container, Paper, Box, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { ColorModeContext, ColorModeContextType } from "./ColorModeContext";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import TodoCounter from "./TodoCounter";

export default function App() {
  const theme = useTheme();

  // ✅ Tell TypeScript the type of the context
  const colorMode = useContext<ColorModeContextType>(ColorModeContext);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        {/* Header with theme toggle */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">My Todo App</Typography>
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>

        {/* Todo app components */}
        <TodoInput />
        <FilterButtons />
        <TodoList />
        <TodoCounter />
      </Paper>
    </Container>
  );
}
