import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

interface StatefulCounterProps {
  initialValue?: number;
  step?: number;
  label?: string;
}

export const StatefulCounter: React.FC<StatefulCounterProps> = ({
  initialValue = 0,
  step = 1,
  label = "Counter",
}) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prevCount) => prevCount + step);
  const decrement = () => setCount((prevCount) => prevCount - step);
  const reset = () => setCount(initialValue);

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: 2,
        padding: 3,
        maxWidth: 300,
        margin: "0 auto",
      }}
    >
      <Typography variant="h5" gutterBottom>
        {label} (Stateful Component)
      </Typography>

      <Typography variant="h4" sx={{ margin: 2 }}>
        {count}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button variant="contained" color="primary" onClick={increment}>
          Increment
        </Button>
        <Button variant="contained" color="secondary" onClick={decrement}>
          Decrement
        </Button>
        <Button variant="outlined" onClick={reset}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};
