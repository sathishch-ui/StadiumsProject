import { Box, CardMedia, CircularProgress } from "@mui/material";
import React, { useState } from "react";

const CardImageWithLoader = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <CardMedia
        component="img"
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        sx={{
          display: loading ? "none" : "block",
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default CardImageWithLoader
