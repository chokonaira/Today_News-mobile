import * as types from "./types";
import { date } from "../../helpers/date";
import { axiosInstance } from "../../config/axios";
import { Controllers } from "../../helpers/controllers";


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

export const addFavoritedColumn = (favorites, articles) => (dispatch) => {
  const updatedArticle = articles.articles.map((article) => {
    if (Controllers.objectExist(favorites, article)) {
      return { ...article, favorited: true };
    } else {
      return { ...article, favorited: false };
    }
  });
  dispatch(newsSuccess({ articles: updatedArticle }));
};

export const news = (favorites, addColumn = addFavoritedColumn) => async (dispatch) => {
  dispatch(newsLoading());

  return axiosInstance
    .get(`?country=us&from=${date.currentDate}`)
    .then(({ data }) => {
      dispatch(addColumn(favorites, data));
    })
    .catch((error) => {
      dispatch(newsError(error.message));
    });
};

