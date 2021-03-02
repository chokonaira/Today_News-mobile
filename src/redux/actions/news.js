import * as types from "./types";
import { currentDate } from "../../helpers/date";
import { axiosInstance } from "../../config/axios";

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
  return axiosInstance
    .get(`?country=us&from=${currentDate}`)
    .then(({ data }) => {
      return dispatch(newsSuccess(data));
    })
    .catch((error) => {
      dispatch(newsError(error.message));
    });
};
