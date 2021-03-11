import * as uuid from "uuid";
import {
  addFavorite,
  removeFavorite,
  fetchAllFavorite,
} from "../../redux/actions/favorites";
import {
  ADD_FAVOURITE_SUCCESS,
  REMOVE_FAVOURITE_SUCCESS,
  FAVOURITE_ERROR,
} from "../../redux/actions/types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import firebase from "firebase";

const mockStore = configureStore([thunk]);

jest.mock("uuid");
jest.spyOn(uuid, "v4").mockReturnValue("56778");

const firestoreMock = {
  collection: jest.fn().mockReturnThis(),
  doc: jest.fn().mockReturnThis(),
  set: jest.fn().mockResolvedValueOnce(),
  get: jest.fn().mockResolvedValueOnce(),
};

jest.spyOn(firebase, "firestore").mockImplementation(() => firestoreMock);

describe("Articles Favorites", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("succesfully adds a favorited article to firestore", async (done) => {
    const store = mockStore({});
    const article = {
      id: "56778",
      favorited: false,
      userEmail: "email@gmail.com",
    };
    const expectedActions = [
      {
        type: ADD_FAVOURITE_SUCCESS,
        payload: { ...article, favorited: true },
      },
    ];
    store.dispatch(addFavorite(article, article.userEmail)).then(() => {
      try {
        expect(firestoreMock.collection).toBeCalledWith("favorites");
        expect(firestoreMock.doc).toBeCalledWith(article.id);
        expect(firestoreMock.set).toBeCalledWith({
          ...article,
          favorited: true,
        });
        expect(store.getActions()).toEqual(expectedActions);

        done();
      } catch (error) {
        console.log(error);
      }
    });
  });

  it("Does not favorite an already favorited article", async (done) => {
    const store = mockStore({});
    const article = {
      id: "56778",
      favorited: true,
      userEmail: "email@gmail.com",
    };
    const expectedActions = [];
    store.dispatch(addFavorite(article, article.userEmail)).then(() => {
      try {
        expect(firestoreMock.collection).toHaveBeenCalledTimes(0);
        expect(firestoreMock.doc).toHaveBeenCalledTimes(0);
        expect(firestoreMock.set).toHaveBeenCalledTimes(0);
        expect(store.getActions()).toEqual(expectedActions);

        done();
      } catch (error) {
        console.log(error);
      }
    });
  });

  it("Does returns an error when something go wrong", async (done) => {
    firestoreMock.collection.mockImplementation(() => {
      throw new Error("Error occured");
    });

    const store = mockStore({});
    const article = {
      id: "56778",
      favorited: false,
      userEmail: "email@gmail.com",
    };
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

  xit("succesfully removes a favorited article from firestore", async (done) => {
    const store = mockStore({});
    const article = {
      id: "56778",
      favorited: true,
      userEmail: "email@gmail.com",
    };
    const expectedActions = [
      {
        type: REMOVE_FAVOURITE_SUCCESS,
        payload: { ...article, favorited: true },
      },
    ];
    store.dispatch(removeFavorite(article, article.userEmail)).then(() => {
      try {
        expect(firestoreMock.collection).toBeCalledWith("favorites");
        expect(firestoreMock.get).toBeCalledWith(article);
        // expect(store.getActions()).toEqual(expectedActions);

        done();
      } catch (error) {
        console.log(error);
      }
    });
  });
});
