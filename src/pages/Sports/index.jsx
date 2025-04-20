import React, { useEffect } from "react";
import PageTitle from "../../components/PageTitle";
import constants from "../../utils/constants";
import { SearchBar } from "../../components/SearchBar";
import GridView from "./GridView";
import { useDispatch } from "react-redux";
import { fetchSports } from "../../store/actions/sportsActions";

const Sports = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = React.useState("");

  useEffect(() => {
    dispatch(fetchSports());
  }, [searchString]);
  
  return (
    <div>
      <PageTitle title={constants.PAGE_TITLE.SPORTS} />
      <SearchBar
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <GridView />
    </div>
  );
};

export default Sports;
