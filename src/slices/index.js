import { combineReducers } from "redux";
import tokenReducer from "slices/token";

const rootReducer = combineReducers({
  token: tokenReducer,
});

export default rootReducer;
