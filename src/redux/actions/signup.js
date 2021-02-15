import { auth, database } from "../../config/firebase";
import * as types from "./types";

const signUpLoading = () => ({
  type: types.SIGNUP_LOADING,
});

const signUpSuccess = (payload) => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});

const signUpFailure = (payload) => ({
  type: types.SIGNUP_ERROR,
  payload,
});

export const signUp = (userName, email, password) => (dispatch) => {
  dispatch(signUpLoading());
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      database.collection("users").doc(auth.currentUser.uid).set({
        userName,
        email,
      });
      dispatch(signUpSuccess(response));
    })
    .catch((error) => {
      dispatch(signUpFailure(error));
    });
};
