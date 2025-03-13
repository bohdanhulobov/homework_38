import React from "react";
import { Box, Typography, Paper } from "@mui/material";

interface StatelessDisplayProps {
  title: string;
  content: string | number;
  subtitle?: string;
  backgroundColor?: string;
}

export const StatelessDisplay: React.FC<StatelessDisplayProps> = ({
  title,
  content,
  subtitle = "Stateless Component",
  backgroundColor = "#f5f5f5",
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        maxWidth: 300,
        margin: "0 auto",
        backgroundColor,
      }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      <Typography variant="subtitle2" color="text.secondary">
        {subtitle}
      </Typography>

      <Box sx={{ margin: 2, padding: 2, border: "1px dashed #ccc" }}>
        <Typography variant="body1">{content}</Typography>
      </Box>
    </Paper>
  );
};
