import { Typography } from "@mui/material";
import React from "react";

const CardTitle = ({ title, variant }) => {
  return (
    <>
      <Typography
        variant={variant || "h6"}
        component="div"
        className="truncate text-justify"
      >
        {title || "-"}
      </Typography>
    </>
  );
};

export default CardTitle;
