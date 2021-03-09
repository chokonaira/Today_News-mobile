import * as types from "./types";
import * as firebase from "firebase";
import "firebase/firestore";
import { Controllers } from "../../helpers/controllers";
import { v4 as uuidv4 } from "uuid";

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
      auth: { user },
    } = await getState();

    if (article.favorited) return;

    const favoriteArticle = {
      ...article,
      id: uuidv4(),
      favorited: true,
      userEmail: user.email,
    };

    await firebase
      .firestore()
      .collection("favorites")
      .doc(favoriteArticle.id)
      .set(favoriteArticle);
    dispatch(addFavoriteSuccess(favoriteArticle));
  } catch (error) {
    dispatch(favoriteError(error.message));
  }
};

export const removeFavorite = (article) => async (dispatch, getState) => {
  try {
    const {
      auth: { user },
      favorites: { favorites },
    } = await getState();
    const favoritesRef = firebase.firestore().collection("favorites");
    const snapshot = await favoritesRef
      .where("userEmail", "==", user.email)
      .where("url", "==", article.url)
      .where("publishedAt", "==", article.publishedAt)
      .get();
    snapshot.forEach((doc) => console.log(doc.ref.delete()));
    const newFavorites = Controllers.deleteFavorites(favorites, article);
    dispatch(removeFavoriteSuccess(newFavorites));
  } catch (error) {
    dispatch(favoriteError(error.message));
  }
};

export const fetchAllFavorite = () => async (dispatch, getState) => {
  dispatch(favoriteLoading());
  try {
    const {
      auth: { user },
    } = await getState();

    const favoritesRef = firebase.firestore().collection("favorites");
    const snapshot = await favoritesRef
      .where("userEmail", "==", user.email)
      .get();
    const result = snapshot.docs.map((doc) => doc.data());
    dispatch(fetchAllFavoriteSuccess(result));
  } catch (error) {
    dispatch(favoriteError(error.message));
  }
};
