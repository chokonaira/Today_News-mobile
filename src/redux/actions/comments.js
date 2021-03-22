import * as types from "./types";
import * as firebase from "firebase";
import "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { state } from "./getState";
import { FirestoreWrapper } from "./FirestoreWrapper";
const firestoreWrapper = new FirestoreWrapper();

const commentsLoading = () => ({
  type: types.COMMENTS_LOADING,
});

const addCommentsSuccess = (payload) => ({
  type: types.ADD_COMMENTS_SUCCESS,
  payload,
});

const fetchAllCommentsSuccess = (payload) => ({
  type: types.FETCH_ALL_COMMENTS_SUCCESS,
  payload,
});

const commentsError = (payload) => ({
  type: types.COMMENTS_ERROR,
  payload,
});

export const addComment = (comment, url, email, firestore = firestoreWrapper) => async (dispatch) => {
  dispatch(commentsLoading());
  try {
    const commentedArticle = {
      id: uuidv4(),
      comment,
      userEmail: email,
      url,
    };
    await firestore.addComment(commentedArticle);
    dispatch(addCommentsSuccess(commentedArticle));
  } catch (error) {
    dispatch(commentsError(error.message));
  }
};

export const fetchAllComments = (articleUrl, firestore = firestoreWrapper) => async (dispatch) => {
  dispatch(commentsLoading());
  try {
    const result = await firestore.fetchAllComments(articleUrl);
    patch(fetchAllCommentsSuccess(result));
  } catch (error) {
    dispatch(commentsError(error.message));
  }
};
