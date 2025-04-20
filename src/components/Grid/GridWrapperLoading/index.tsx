import { Box, CircularProgress } from "@mui/material";
import React from "react";

const GridWrapperLoading = () => {
  return (
    <Box className="h-[calc(100vh-290px)] flex flex-col justify-center items-center relative pt-4">
      <CircularProgress />
    </Box>
  );
};

export default GridWrapperLoading;
