import firebase from "firebase";
import * as types from "./types";

const loginLoading = () => ({
  type: types.LOGIN_LOADING,
});

const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

const loginFailure = (payload) => ({
  type: types.LOGIN_ERROR,
  payload,
});

export const login = (email, password) => (dispatch) => {
  dispatch(loginLoading());
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch(loginSuccess(response.user));
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
};
