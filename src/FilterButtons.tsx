// src/components/FilterButtons.tsx
import { Button, ButtonGroup, Box, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, Filter, RootState, AppDispatch } from "./store";

export default function FilterButtons() {
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector((state: RootState) => state.todoApp.filter);
  const theme = useTheme();

  const filters: Filter[] = ["ALL", "ACTIVE", "COMPLETED"];

  return (
    <Box mt={2}>
      <ButtonGroup variant="outlined">
        {filters.map((f) => (
          <Button
            key={f}
            variant={filter === f ? "contained" : "outlined"}
            onClick={() => dispatch(setFilter(f))}
            sx={{
              color:
                filter === f
                  ? theme.palette.getContrastText(theme.palette.primary.main)
                  : theme.palette.text.primary,
            }}
          >
            {f}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}
