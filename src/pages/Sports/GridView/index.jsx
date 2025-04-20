import React from "react";
import GridWrapper from "../../../components/Grid/GridWrapper";
import { useSelector } from "react-redux";
import SportsCardList from "../Common/SportsCardList"
import GridWrapNocontent from "../../../components/Grid/GridNoContent";
import GridWrapperLoading from "../../../components/Grid/GridWrapperLoading";
import { Box } from "@mui/material";

const GridView = () => {
  const { sports, loading } = useSelector((state) => state.sportData);

  const noSports = sports.length === 0;

  return (
    <GridWrapper>
      {loading && <GridWrapperLoading />}
      {noSports && !loading && <GridWrapNocontent message="No Sports Found" />}
      {!loading && !noSports && (
        <Box className="flex-1 overflow-y-auto">
          <SportsCardList sports={sports} />
        </Box>
      )}
    </GridWrapper>
  );
};

export default GridView;
