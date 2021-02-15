import { combineReducers } from "redux";
import { signUpReducer } from "./signUpReducer";
import { signInReducer } from "./signInReducer";

export default combineReducers({
  signUpReducer,
  signInReducer
});
