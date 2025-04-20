import { Box } from "@mui/material";
import React from "react";

const GridWrapper = ({ children }) => {
  return (
    <Box className="h-[calc(100vh-290px)] flex flex-col relative pt-4">
      {children}
    </Box>
  );
};

export default GridWrapper;
