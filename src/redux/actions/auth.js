import * as types from "./types";
import { auth, database } from "../../config/firebase";

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

export const signUp = (username, email, password, navigation) => (dispatch) => {
  dispatch(authLoading());
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const {user: { uid, email }} = response;
      database.collection("users").doc(uid).set({
        username,
        email,
      });
      dispatch(authSuccess(response.user));
      navigation.navigate("News");
    })
    .catch((error) => {
      console.log(error)
      dispatch(authError(error.message));
    });
};

export const signIn = (email, password, navigation) => (dispatch) => {
  dispatch(authLoading());
  auth
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch(authSuccess(response.user));
      navigation.navigate("News");
    })
    .catch((error) => {
      dispatch(authError(error.message));
    });
};
