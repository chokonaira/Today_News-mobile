import * as types from "./types";
import { currentDate } from "../../helpers/date";
import { fetchAllFavorite } from "./favorites";
import { axiosInstance } from "../../config/axios";
import { ObjectExist } from "../../helpers/objectExist";

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

export const news = () => async (dispatch, getState) => {
  dispatch(newsLoading());
  dispatch(fetchAllFavorite());

  const {
    favorites: { favorites },
  } = await getState();

  return axiosInstance
    .get(`?country=us&from=${currentDate}`)
    .then(({ data }) => {
      dispatch(formatter(favorites, data));
    })
    .catch((error) => {
      dispatch(newsError(error.message));
    });
};

export const formatter = (favorites, articles) => (dispatch) => {
  const updatedArticle = articles.articles.map((article) => {
    if (ObjectExist(favorites, article)) {
      return { ...article, favorited: true };
    } else {
      return { ...article, favorited: false };
    }
  });
  dispatch(newsSuccess({ articles: updatedArticle }));
};
