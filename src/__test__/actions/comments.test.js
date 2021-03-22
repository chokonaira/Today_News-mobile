import * as uuid from "uuid";
import { addComment } from "../../redux/actions/comments";
import {
  COMMENTS_LOADING,
  ADD_COMMENTS_SUCCESS,
  COMMENTS_ERROR,
} from "../../redux/actions/types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { FirestoreWrapper } from "../../redux/actions/FirestoreWrapper";

jest.mock("../../redux/actions/FirestoreWrapper");
jest.mock("../../helpers/controllers");

jest.mock("uuid");
jest.spyOn(uuid, "v4").mockReturnValue("1234");

const mockStore = configureStore([thunk]);

describe("Articles Comments", () => {
  beforeEach(() => {
    FirestoreWrapper.mockClear();
  });

  it("succesfully adds article comments to firestore", async (done) => {
    const { store, article } = helper();
    const firestoreWrapper = new FirestoreWrapper()
    const expectedActions = [
      {
        type: COMMENTS_LOADING,
      },
      {
        type: ADD_COMMENTS_SUCCESS,
        payload: article,
      },
    ];
    store.dispatch(addComment(article.comment, article.url, article.userEmail, firestoreWrapper))
      .then(() => {
        try {
          const mockWrapperInstance = FirestoreWrapper.mock.instances[0];
          const mockAddComment = mockWrapperInstance.addComment;
  
          expect(mockAddComment).toBeCalledWith(article);
          expect(store.getActions()).toEqual(expectedActions);
          done();
        } catch (error) {
          console.log(error);
        }
      });
  });

  it("Does returns an error when something go wrong when adding a comment", async (done) => {
    const { store, article } = helper();
    const firestoreWrapper = new FirestoreWrapper()

    firestoreWrapper.addComment.mockImplementation(() => {
      throw new Error("Error occured");
    });

    const expectedActions = [
      {
        type: COMMENTS_LOADING,
      },
      {
        type: COMMENTS_ERROR,
        payload: "Error occured",
      },
    ];
    store.dispatch(addComment(article.comment, article.url, article.userEmail, firestoreWrapper))
      .then(() => {
        try {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        } catch (error) {
          console.log(error);
        }
      });
  });
});

const helper = () => {
  const store = mockStore({});
  const article = {
    id: "1234",
    comment: "Hello World",
    userEmail: "email@gmail.com",
    url: "url.com",
  };
  return { store, article };
};