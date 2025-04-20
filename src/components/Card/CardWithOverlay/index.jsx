import React from "react";
import CardImagewithLoader from "../CardImagewithLoader";
import { IconCheck, IconPencil, IconTrash } from "@tabler/icons-react";
import { Box, Tooltip } from "@mui/material";
import constants from "../../../utils/constants";

const CardWithOverlay = ({ logo, is_active, name }) => {
  return (
    <Box className="relative">
      <Box className="card-overlay absolute bg-black bg-opacity-50 inset-0 transition-opacity duration-300 ease-in-out z-[1]">
        <CardImagewithLoader
          src={logo || constants.PLACEHOLDER.IMG_URL}
          alt={name}
        />
        <Box className="buttons-overlay absolute top-2 right-2 flex gap-2 opacity-0 invisible transition-opacity transition-visibility duration-300 ease-in-out z-[2] group-hover:opacity-100 group-hover:visible">
          <Tooltip title={is_active === 1 ? "Active" : "Inactive"} arrow>
            <button
              className={`${
                is_active === 1 ? "bg-green-500" : "bg-red-500"
              } min-w-[auto] p-1 h-[25px] w-[25px] flex items-center justify-center rounded-full`}
            >
              <IconCheck size="24px" />
            </button>
          </Tooltip>
          <Tooltip title={`Edit`} arrow>
            <button className="min-w-[auto] p-1 h-[25px] w-[25px] flex items-center justify-center rounded-full bg-yellow-500">
              <IconPencil size="24px" />
            </button>
          </Tooltip>
          <Tooltip title={`Delete`} arrow>
            <button className="min-w-[auto] p-1 h-[25px] w-[25px] flex items-center justify-center rounded-full bg-red-500">
              <IconTrash size="24px" />
            </button>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default CardWithOverlay;
