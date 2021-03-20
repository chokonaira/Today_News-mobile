import * as uuid from "uuid";
import firebase from "firebase";
import { addFavorite, removeFavorite } from "../../redux/actions/favorites";
import {
  ADD_FAVOURITE_SUCCESS,
  REMOVE_FAVOURITE_SUCCESS,
  FAVOURITE_ERROR,
} from "../../redux/actions/types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { FirestoreWrapper } from "../../redux/actions/FirestoreWrapper";
import { FakeFirestore } from "./FakeFirestore";

jest.mock("../../redux/actions/FirestoreWrapper");

jest.mock("uuid");
jest.spyOn(uuid, "v4").mockReturnValue("56778");

const dataMock = jest.fn();

const refMock = {
  delete: jest.fn(),
};

const favoritedArticles = {
  docs: [
    {
      userEmail: "email.com",
      url: "url.com",
      publishedAt: "2021-01-01",
      ref: refMock,
      data: dataMock,
    },
  ],
};

export const myFirestore = new FakeFirestore(favoritedArticles);
jest.spyOn(firebase, "firestore").mockImplementation(() => myFirestore);

const mockStore = configureStore([thunk]);

describe("Articles Favorites", () => {
  beforeEach(() => {
    FirestoreWrapper.mockClear();
    jest.clearAllMocks();
  });

  it("succesfully adds a favorited article to firestore", async (done) => {
    const { store, article } = helper(false);
    const expectedActions = [
      {
        type: ADD_FAVOURITE_SUCCESS,
        payload: { ...article, favorited: true },
      },
    ];
    store.dispatch(addFavorite(article, article.userEmail)).then(() => {
      try {
        const wrapper = new FirestoreWrapper();
        wrapper.addFavorite(article, article.userEmail);

        const mockWrapperInstance = FirestoreWrapper.mock.instances[0];
        const mockAddFavorite = mockWrapperInstance.addFavorite;

        expect(mockAddFavorite).toHaveBeenCalledTimes(1);
        expect(mockAddFavorite).toHaveBeenCalledWith(
          article,
          article.userEmail
        );
        expect(store.getActions()).toEqual(expectedActions);
        done();
      } catch (error) {
        console.log(error);
      }
    });
  });

  it("Does not favorite an already favorited article", async (done) => {
    const { store, article } = helper(true);
    const expectedActions = [];
    store.dispatch(addFavorite(article, article.userEmail)).then(() => {
      try {
        const wrapper = new FirestoreWrapper();
        wrapper.addFavorite(article, article.userEmail);

        const mockWrapperInstance = FirestoreWrapper.mock.instances[0];
        const mockAddFavorite = mockWrapperInstance.addFavorite;

        expect(mockAddFavorite).toHaveBeenCalledTimes(1);
        expect(mockAddFavorite).toHaveBeenCalledWith(
          article,
          article.userEmail
        );
        expect(store.getActions()).toEqual(expectedActions);

        done();
      } catch (error) {
        console.log(error);
      }
    });
  });

  xit("Does returns an error when something go wrong when adding an article", async (done) => {
    myFirestore.collectionWasCalledWith.mockImplementation(() => {
      throw new Error("Error occured");
    });
    const { store, article } = helper(false);
    const expectedActions = [
      {
        type: FAVOURITE_ERROR,
        payload: "Error occured",
      },
    ];
    store.dispatch(addFavorite(article, article.userEmail)).then(() => {
      try {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      } catch (error) {
        console.log(error);
      }
    });
  });

  it("succesfully removes a favorited article from firestore", async (done) => {
    const { store, article } = helper(true);

    const expectedActions = [
      {
        type: REMOVE_FAVOURITE_SUCCESS,
        payload: [],
      },
    ];

    store.dispatch(removeFavorite(article, article.userEmail)).then(() => {
      try {
        const wrapper = new FirestoreWrapper();
        wrapper.removeFavorite(article, article.userEmail);

        const mockWrapperInstance = FirestoreWrapper.mock.instances[0];
        const mockRemoveFavorite = mockWrapperInstance.removeFavorite;

        expect(mockRemoveFavorite).toHaveBeenCalledTimes(1);
        expect(mockRemoveFavorite).toHaveBeenCalledWith(
          article,
          article.userEmail
        );
        expect(store.getActions()).toEqual(expectedActions);

        done();
      } catch (error) {
        console.log(error);
      }
    });
  });

  xit("Does returns an error when something go wrong when removing an article", async (done) => {
    await myFirestore.collectionWasCalledWith.mockImplementation(() => {
      throw new Error("Error occured");
    });

    const { store, article } = helper(true);
    const expectedActions = [
      {
        type: FAVOURITE_ERROR,
        payload: "Error occured",
      },
    ];
    store.dispatch(removeFavorite(article, article.userEmail)).then(() => {
      try {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      } catch (error) {
        console.log(error);
      }
    });
  });
});

const helper = (isFavorited) => {
  const store = mockStore({});
  const article = {
    id: "56778",
    favorited: isFavorited,
    userEmail: "email@gmail.com",
    url: "url.com",
    publishedAt: "01-2021",
  };
  return { store, article };
};
