import React from "react";
import SportsCardItem from "./SportsCardItem";

const SportsCardList = ({ sports }) => {
  return (
    <div className="flex flex-wrap gap-4 py-2">
      {sports.map((sport) => (
        <SportsCardItem key={sport.id} sport={sport} />
      ))}
    </div>
  );
};

export default SportsCardList;
