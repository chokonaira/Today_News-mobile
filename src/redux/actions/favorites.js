import * as types from "./types";
import * as firebase from "firebase";
import "firebase/firestore";
import { Checker } from "../../helpers/checker";

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

    if (Checker.objectExist(favorites, article)) return;

    const favoriteArticle = {
      ...article,
      favorited: true,
    };
    await firebase
      .firestore()
      .collection("favorites")
      .doc(article.publishedAt)
      .set(favoriteArticle);
    dispatch(addFavoriteSuccess(favoriteArticle));
  } catch (error) {
    dispatch(favoriteError(error.message));
  }
};

export const removeFavorite = (article) => async (dispatch, getState) => {
  try {
    const {
      favorites: { favorites },
    } = await getState();

    await firebase
      .firestore()
      .collection("favorites")
      .doc(article.publishedAt)
      .delete();

    const newFavorites = Checker.filterFavorites(favorites, article);

    dispatch(removeFavoriteSuccess(newFavorites));
  } catch (error) {
    dispatch(favoriteError(error.message));
  }
};

export const fetchAllFavorite = () => async (dispatch, getState) => {
  dispatch(favoriteLoading());
  try {
    const {auth: {user}} = await getState();
    const snapshot = await firebase.firestore().collection("favorites").get();
    const result = snapshot.docs.map((doc) => {
      return doc.data();
    });
    const authFavorites = Checker.authArticleCheck(result, user.uid)
    dispatch(fetchAllFavoriteSuccess(authFavorites));
  } catch (error) {
    dispatch(favoriteError(error.message));
  }
};
