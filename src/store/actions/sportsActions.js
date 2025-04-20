import constants from "../../utils/constants";
import {
  FETCH_SPORTS_FULFILLED,
  FETCH_SPORTS_PENDING,
  FETCH_SPORTS_REJECTED,
} from "../types/actionTypes";

export const fetchSports = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_SPORTS_PENDING });
    try {
      const response = await fetch(constants.API_URL.SPORTS);
      const data = await response.json();
      dispatch({ type: FETCH_SPORTS_FULFILLED, payload: data?.data?.items });
    } catch (error) {
      dispatch({ type: FETCH_SPORTS_REJECTED, payload: error });
    }
  };
};
