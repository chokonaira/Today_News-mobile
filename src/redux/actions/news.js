import * as types from "./types";
import { date } from "../../helpers/date";
import { fetchAllFavorite } from "./favorites";
import { axiosInstance } from "../../config/axios";
import { Controllers } from "../../helpers/controllers";
import { state } from "./getState";


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
  const {user, favorites} = await state();

  dispatch(newsLoading());
  dispatch(fetchAllFavorite(user.email));

  return axiosInstance
    .get(`?country=us&from=${date.currentDate}`)
    .then(({ data }) => {
      dispatch(addColumn(favorites, data));
    })
    .catch((error) => {
      dispatch(newsError(error.message));
    });
};

export const addColumn = (favorites, articles) => (dispatch) => {
  const updatedArticle = articles.articles.map((article) => {
    if (Controllers.objectExist(favorites, article)) {
      return { ...article, favorited: true };
    } else {
      return { ...article, favorited: false };
    }
  });
  dispatch(newsSuccess({ articles: updatedArticle }));
};
