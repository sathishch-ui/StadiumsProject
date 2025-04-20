import { Box, CircularProgress } from "@mui/material";
import React from "react";

const GridWrapNocontent = ({ message }) => {
  return (
    <Box className="h-[calc(100vh-290px)] flex flex-col justify-center items-center relative pt-4">
      <p className="mt-5 text-sm text-center"> {message} </p>
    </Box>
  );
};

export default GridWrapNocontent;
