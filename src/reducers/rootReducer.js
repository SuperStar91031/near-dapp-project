import stakingReducer from "././stakingReducer";
import { combineReducers } from "redux";

//Combine all the sub reducers
const rootReducer = combineReducers({
  staking: stakingReducer,
});

export default rootReducer;
