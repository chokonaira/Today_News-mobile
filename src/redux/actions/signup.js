import { auth, database } from "../../config/firebase";
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

export const signup = (userName, email, password) => (dispatch) => {
  dispatch(signupLoading());
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      database.collection("users").doc(auth.currentUser.uid).set({
        userName,
        email,
      });
      dispatch(signupSuccess(response));
    })
    .catch((error) => {
      dispatch(signupFailure(error));
    });
};
