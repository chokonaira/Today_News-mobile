import firebase from "firebase";
import * as types from "./types";

const signupLoading = () => ({
  type: types.SIGNUP_LOADING,
});

const signupSuccess = (payload) => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});

const signupFailure = (payload) => ({
  type: types.SIGNUP_ERROR,
  payload,
});

export const signup = (email, password) => (dispatch) => {
  dispatch(signupLoading());
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch(signupSuccess(response));
    })
    .catch((error) => {
      dispatch(signupFailure(error));
    });
};
