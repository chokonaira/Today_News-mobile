import * as types from "./types";
import * as firebase from "firebase";
import "firebase/firestore";
import {firebaseConfig} from '../../config/firebase'

firebase.initializeApp(firebaseConfig);

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

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const signUp = (username, email, password, navigation) => async(dispatch) => {
  dispatch(authLoading());
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({ username, email });
      dispatch(authSuccess(response.user));
      navigation.navigate("News");
    })
    .catch((error) => {
      dispatch(authError(error.message));
    });
};


export const signIn = (email, password, navigation) => async(dispatch) => {
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

export const logout = (navigation) => (dispatch) => {
  dispatch(logoutSuccess());
  navigation.navigate("Home");
};
