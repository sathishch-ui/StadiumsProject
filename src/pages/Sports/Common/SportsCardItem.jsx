import { Box, Card, CardContent, Divider, Tooltip } from "@mui/material";
import React from "react";
import CardTitle from "../../../components/Card/CardTitle";
import { AccountStatusConvertor } from "../../../utils/commonFunction";
import CardWithOverlay from "../../../components/Card/CardWithOverlay";
import { IconCircleDashedPlus, IconPlus } from "@tabler/icons-react";
import constants from "../../../utils/constants";

const SportsCardItem = ({ sport }) => {
  const { sport_logo, is_active, sport_name } = sport || {};

  return (
    <Card className="min-w-[250px] w-[260px] min-h-[380px] h-[385px] border border-gray-300 rounded-lg overflow-hidden flex flex-col justify-between mt-1 mb-2 relative group">
      <CardWithOverlay
        logo={sport_logo || constants.PLACEHOLDER.IMG_URL}
        is_active={is_active}
        name={sport_name}
        height="180px"
      />
      <CardContent>
        <CardTitle title={sport_name} variant="h6" />
        <CardTitle
          title={AccountStatusConvertor(is_active)}
          variant="body1"
          className={`my-1 ${is_active === 1? "text-green-500" : "text-red-500"}`}
        />
        <Divider className="border-t border-white my-1" />
        <Box className="flex items-center gap-2 flex-wrap mt-2">
          <CardTitle
            variant="subtitle1"
            className="my-1 flex items-center"
            title="Leagues"
          />
          <Tooltip title="Add League" arrow>
            <button
              className="bg-yellow-500 text-black rounded-full flex items-center justify-center w-5 h-5 p-1"
            >
              <IconPlus size="16px" />
            </button>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SportsCardItem;
