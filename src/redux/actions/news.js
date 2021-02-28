import * as types from "./types";
import { currentDate } from "../../helpers/date";
import { axiosConfig } from "../../config/axios";

const API_KEY = "5a5316ec9d0e46f5bb7474eb91099727";

const newsLoading = () => ({
  type: types.NEWS_LOADING,
});

const newsSuccess = (payload) => ({
  type: types.NEWS_SUCCESS,
  payload,
});

const newsError = (payload) => ({
  type: types.NEWS_ERROR,
  payload,
});

export const news = () => (dispatch) => {
  dispatch(newsLoading());
  return axiosConfig
    .get(
      `?country=us&apiKey=${API_KEY}`
    )
    .then(({ data }) => {
      console.log(data)
      return dispatch(newsSuccess(data));
    })
    .catch((error) => {
      dispatch(newsError(error.message));
    });
};
