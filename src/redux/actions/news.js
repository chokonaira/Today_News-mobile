import * as types from "./types";
import { currentDate } from "../../helpers/date";
import { fetchAllFavorite } from "./favorites";
import { axiosInstance } from "../../config/axios";
import store from "../store";
import { formatter } from "../../helpers/formatter";

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

export const news = () => async (dispatch) => {
  dispatch(newsLoading());
  dispatch(fetchAllFavorite())

  const {
    favorites: { favorites },
  } = await store.getState();

  return axiosInstance
    .get(`?country=us&from=${currentDate}`)
    .then(({ data }) => {
      // console.log(data) 
      dispatch(newsSuccess(data));
    })
    .catch((error) => {
      dispatch(newsError(error.message));
    });
};