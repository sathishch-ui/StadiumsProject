import { combineReducers } from "redux";
import sportsReducer from "./sportsReducer";

const rootReducer = combineReducers({ sportData: sportsReducer });

export default rootReducer;
