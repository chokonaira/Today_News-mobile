import * as types from "./types";
import { axiosConfig } from "../../config/axios";
import { currentDate } from "../../helpers/date";

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
    .get(`?country=us&from=${currentDate()}`)
    .then(({ data }) => {
      dispatch(newsSuccess(data));
    })
    .catch((error) => {
      dispatch(newsError(error.message));
    });
};
