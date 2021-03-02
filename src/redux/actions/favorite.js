import * as types from "./types";
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
  try {
  const authUserFavoriteArticle = { 
    ...article, 
    favorited: true 
  };
    await firebase
      .firestore()
      .collection("favorites")
      .doc(article.articleId)
      .set(authUserFavoriteArticle);
    dispatch(addFavoriteSuccess(authUserFavoriteArticle));
  } catch (error) {
    dispatch(addFavoriteError(error.message));
  }
};

export const removeFavorite = (article) => async (dispatch) => {
  try {
  const { auth:{ user:{ uid } } } = store.getState();
  // const authUser = firebase.auth().currentUser.uid;
  // if (uid === authUser)
  const snapshots = await firebase.firestore().collection('favorites').where('favorited', '==', true).get().
  console.log(snapshots)
  
    // console.log(snapshots.docs.forEach(snapshot => {
    //   console.log(snapshot.data())
    // }));
  // });
    //   .firestore()
    //   .collection("favorites")
    //   .doc(article.articleId)
    //   .delete();
  
    // await firestoreArticle.delete()
  } catch (error) {
    console.log('failed')
    // dispatch(addFavoriteError(error.message));
  }
};

