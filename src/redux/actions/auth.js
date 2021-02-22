import * as types from "./types";
import { auth, database } from "../../config/firebase";
import * as firebase from "firebase";

const authLoading = () => ({
  type: types.AUTH_LOADING,
});

const authSuccess = (payload) => ({
  type: types.AUTH_SUCCESS,
  payload,
});

const authError = (payload) => ({
  type: types.AUTH_ERROR,
  payload,
});

export const signUp = (email, password, navigation) => (dispatch) => {
  dispatch(authLoading());
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const {user: { uid, email }} = response;
      firebase.firestore().collection("users").doc(uid).set({
        username,
        email,
      });
      dispatch(authSuccess(response.user));d
      navigation.navigate("News");
    })
    .catch((error) => {
      console.log(error)
      dispatch(authError(error.message));
    });
};

export const signIn = (email, password, navigation) => (dispatch) => {
  dispatch(authLoading());
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch(authSuccess(response.user));
      navigation.navigate("News");
    })
    .catch((error) => {
      dispatch(authError(error.message));
    });
};
