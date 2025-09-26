// src/App.tsx
import React, { useContext } from "react";
import { Container, Paper, IconButton, Box, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./ThemeProvider";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import TodoCounter from "./TodoCounter";

export default function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">My Todo App</Typography>
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {/* show sun icon when in dark mode (so user can switch to light), and moon icon when in light */}
            {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>

        <TodoInput />
        <FilterButtons />
        <TodoList />
        <TodoCounter />
      </Paper>
    </Container>
  );
}
