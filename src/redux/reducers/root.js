import { combineReducers } from "redux";
import auth from "./auth";
import news from "./news";
import favorites from "./favorite";

export default combineReducers({
  auth,
  news,
  favorites
});
