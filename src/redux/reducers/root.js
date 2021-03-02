import { combineReducers } from "redux";
import auth from "./auth";
import news from "./news";
import favorite from "./favorite";

export default combineReducers({
  auth,
  news,
  favorite
});
