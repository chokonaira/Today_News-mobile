import { combineReducers } from "redux";
import auth from "./auth";
import news from "./news";
import favorites from "./favorite";
import comments from "./comments";

export default combineReducers({
  auth,
  news,
  favorites,
  comments,
});
