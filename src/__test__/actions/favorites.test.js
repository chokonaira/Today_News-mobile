import firebase from "firebase";
import * as uuid from "uuid";
import {
  addFavorite,
  removeFavorite,
  fetchAllFavorite,
} from "../../redux/actions/favorites";
import { ADD_FAVOURITE_SUCCESS } from "../../redux/actions/types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);

jest.mock("uuid");
jest.spyOn(uuid, "v4").mockReturnValue("56778");
const firestoreMock = {
  collection: jest.fn().mockReturnThis(),
  doc: jest.fn().mockReturnThis(),
  set: jest.fn().mockResolvedValueOnce(),
};

jest.spyOn(firebase, "firestore").mockImplementationOnce(() => firestoreMock);

describe("Articles Favorites", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
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

  it("succesfully adds a favorited article to firestore", async (done) => {
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
});
