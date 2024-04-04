import taskReducers from "./taskSlice";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  taskReducers,
});
export default rootReducer;
