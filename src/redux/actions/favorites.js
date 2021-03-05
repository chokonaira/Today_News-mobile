import * as types from "./types";
import * as firebase from "firebase";
import "firebase/firestore";
import { ObjectExist } from "../../helpers/objectExist";

const favoriteLoading = () => ({
  type: types.FAVOURITE_LOADING,
});

const addFavoriteSuccess = (payload) => ({
  type: types.ADD_FAVOURITE_SUCCESS,
  payload,
});
const removeFavoriteSuccess = (payload) => ({
  type: types.REMOVE_FAVOURITE_SUCCESS,
  payload,
});
const fetchAllFavoriteSuccess = (payload) => ({
  type: types.FETCH_ALL_FAVOURITE_SUCCESS,
  payload,
});
const favoriteError = (payload) => ({
  type: types.FAVOURITE_ERROR,
  payload,
});

export const addFavorite = (article) => async (dispatch, getState) => {
  try {
    const {
      favorites: { favorites },
    } = await getState();

    if (ObjectExist(favorites, article)) return;

    const favoriteArticle = {
      ...article,
      favorited: true,
    };
    await firebase
      .firestore()
      .collection("favorites")
      .doc(article.publishedAt)
      .set(favoriteArticle);
    console.log(article.publishedAt, "added");
    dispatch(addFavoriteSuccess(favoriteArticle));
  } catch (error) {
    dispatch(favoriteError(error.message));
  }
};

export const removeFavorite = (article) => async (dispatch, getState) => {
  console.log(article.articleId, "remove");
  try {
    await firebase
      .firestore()
      .collection("favorites")
      .doc(article.publishedAt)
      .delete();
    const {
      favorites: { favorites },
    } = await getState();

    const updatedFavorites = favorites.filter((favorite) => {
      return favorite.articleId == !article.articleId;
    });

    dispatch(removeFavoriteSuccess(updatedFavorites));
  } catch (error) {
    dispatch(favoriteError(error.message));
  }
};

export const fetchAllFavorite = () => async (dispatch) => {
  dispatch(favoriteLoading());
  try {
    const snapshot = await firebase.firestore().collection("favorites").get();
    snapshot.docs.forEach((doc) => {
      dispatch(fetchAllFavoriteSuccess(doc.data()));
    });
  } catch (error) {
    dispatch(favoriteError(error.message));
  }
};
