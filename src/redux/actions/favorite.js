import * as types from "./types";
import { v4 as uuidv4 } from "uuid";
import * as firebase from "firebase";
import "firebase/firestore";
import store from '../store'

// import { firebaseConfig } from "../../config/firebase";

// firebase.initializeApp(firebaseConfig);

const favoriteLoading = () => ({
  type: types.FAVOURITE_LOADING,
});

const addFavoriteSuccess = (payload) => ({
  type: types.ADD_FAVOURITE_SUCCESS,
  payload,
});

const addFavoriteError = (payload) => ({
  type: types.ADD_FAVOURITE_ERROR,
  payload,
});

export const addFavorite = (article) => async (dispatch) => {

  const uniqueId = uuidv4();

  const {auth:{user:{uid}}} = store.getState();

  const favoriteArticle = { 
    ...article, 
    userId: uid, 
    articleId: uniqueId, 
    favorited: true };

  try {
    await firebase
      .firestore()
      .collection("favorites")
      .doc(uniqueId)
      .set(favoriteArticle);
    dispatch(addFavoriteSuccess(favoriteArticle));
  } catch (error) {
    dispatch(addFavoriteError(error.message));
  }
};

