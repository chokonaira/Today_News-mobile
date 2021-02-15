import firebase from "firebase";
import * as types from "./types";

const signInLoading = () => ({
  type: types.LOGIN_LOADING,
});

const signInSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

const signInFailure = (payload) => ({
  type: types.LOGIN_ERROR,
  payload,
});

export const signIn = (email, password) => (dispatch) => {
  dispatch(signInLoading());
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch(signInSuccess(response.user));
    })
    .catch((error) => {
      dispatch(signInFailure(error));
    });
};
