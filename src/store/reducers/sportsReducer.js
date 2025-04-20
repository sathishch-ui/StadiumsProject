import {
  FETCH_SPORTS_FULFILLED,
  FETCH_SPORTS_PENDING,
  FETCH_SPORTS_REJECTED,
} from "../types/actionTypes";

const initialState = {
  sports: [],
  loading: false,
  error: null,
};

const sportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPORTS_PENDING:
      return { ...state, loading: true, error: null };
    case FETCH_SPORTS_FULFILLED:
      return { ...state, loading: false, sports: action.payload };
    case FETCH_SPORTS_REJECTED:
      return { ...state, loading: false, sports: [], error: action.payload };
    default:
      return state;
  }
};

export default sportsReducer;
