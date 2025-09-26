// src/components/FilterButtons.tsx
import { Button, ButtonGroup, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./store";
import { RootState } from "./store";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);

  return (
    <Box mt={2}>
      <ButtonGroup variant="outlined" aria-label="filter buttons">
        <Button
          variant={filter === "ALL" ? "contained" : "outlined"}
          onClick={() => dispatch(setFilter("ALL"))}
        >
          All
        </Button>
        <Button
          variant={filter === "ACTIVE" ? "contained" : "outlined"}
          onClick={() => dispatch(setFilter("ACTIVE"))}
        >
          Active
        </Button>
        <Button
          variant={filter === "COMPLETED" ? "contained" : "outlined"}
          onClick={() => dispatch(setFilter("COMPLETED"))}
        >
          Completed
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default FilterButtons;
