import * as uuid from "uuid";
import { addFavorite, removeFavorite, fetchAllFavorite } from "../../redux/actions/favorites";
import {
  FAVOURITE_LOADING,
  ADD_FAVOURITE_SUCCESS,
  REMOVE_FAVOURITE_SUCCESS,
  FETCH_ALL_FAVOURITE_SUCCESS,
  FAVOURITE_ERROR,
} from "../../redux/actions/types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { FirestoreWrapper } from "../../redux/actions/FirestoreWrapper";
import { Controllers } from "../../helpers/controllers";

jest.mock("../../redux/actions/FirestoreWrapper");
jest.mock("../../helpers/controllers");

jest.mock("uuid");
jest.spyOn(uuid, "v4").mockReturnValue("56778");

const mockStore = configureStore([thunk]);

describe("Articles Favorites", () => {
  beforeEach(() => {
    FirestoreWrapper.mockClear();
  });

  it("succesfully adds a favorited article to firestore", async (done) => {
    const { store, article } = helper(false);
    const firestoreWrapper = new FirestoreWrapper()
    const expectedActions = [
      {
        type: ADD_FAVOURITE_SUCCESS,
        payload: { ...article, favorited: true },
      },
    ];
    store.dispatch(addFavorite(article, article.userEmail, firestoreWrapper)).then(() => {
      try {
         
        const mockWrapperInstance = FirestoreWrapper.mock.instances[0];
        const mockAddFavorite = mockWrapperInstance.addFavorite;

        expect(mockAddFavorite).toHaveBeenCalledWith(
          {...article, favorited: true}
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
    const firestoreWrapper = new FirestoreWrapper()
    const expectedActions = [];
    store.dispatch(addFavorite(article, article.userEmail, firestoreWrapper)).then(() => {
      try {

        const mockWrapperInstance = FirestoreWrapper.mock.instances[0];
        const mockAddFavorite = mockWrapperInstance.addFavorite;

        expect(mockAddFavorite).not.toHaveBeenCalled()
        expect(store.getActions()).toEqual(expectedActions);

        done();
      } catch (error) {
        console.log(error);
      }
    });
  });

  it("Does returns an error when something go wrong when adding an article", async (done) => {
    
    const { store, article } = helper(false);
    const firestoreWrapper = new FirestoreWrapper()

    firestoreWrapper.addFavorite.mockImplementation(() => {
      throw new Error("Error occured");
    });

    const expectedActions = [
      {
        type: FAVOURITE_ERROR,
        payload: "Error occured",
      },
    ];
    store.dispatch(addFavorite(article, article.userEmail, firestoreWrapper)).then(() => {
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
    const firestoreWrapper = new FirestoreWrapper()
    Controllers.filterFavorites.mockReturnValue([])

    const expectedActions = [
      {
        type: REMOVE_FAVOURITE_SUCCESS,
        payload: [],
      },
    ];
    
    store.dispatch(removeFavorite(article, article.userEmail,firestoreWrapper)).then(() => {
      try {
        const mockWrapperInstance = FirestoreWrapper.mock.instances[0];
        const mockRemoveFavorite = mockWrapperInstance.removeFavorite;
        const mockFilterFavorites = Controllers.filterFavorites;
        
        expect(mockRemoveFavorite).toHaveBeenCalledWith(article,article.userEmail);
        expect(mockFilterFavorites).toHaveBeenCalled();
        expect(store.getActions()).toEqual(expectedActions);

        done();
      } catch (error) {
        console.log(error);
      }
    });
  });

  it("Does returns an error when something go wrong when removing an article", async (done) => {
    const { store, article } = helper(true);
    const firestoreWrapper = new FirestoreWrapper()

    firestoreWrapper.removeFavorite.mockImplementation(() => {
      throw new Error("Error occured");
    });

    const expectedActions = [
      {
        type: FAVOURITE_ERROR,
        payload: "Error occured",
      },
    ];
    store.dispatch(removeFavorite(article, article.userEmail, firestoreWrapper)).then(() => {
      try {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      } catch (error) {
        console.log(error);
      }
    });
  });

  it("succesfully fetches all favorited articles from firestore", async (done) => {
    const { store, article } = helper(true);
    const firestoreWrapper = new FirestoreWrapper()
    const result = [article]
    firestoreWrapper.fetchAllFavorite.mockResolvedValue(result)

    const expectedActions = [
      {
        type: FAVOURITE_LOADING,
      },
      {
        type: FETCH_ALL_FAVOURITE_SUCCESS,
        payload: result,
      },
    ];
    store.dispatch(fetchAllFavorite(article.userEmail, firestoreWrapper)).then(() => {
      try {

        const mockWrapperInstance = FirestoreWrapper.mock.instances[0];
        const mockFetchAllFavorites = mockWrapperInstance.fetchAllFavorite;

        expect(mockFetchAllFavorites).toHaveBeenCalledWith(article.userEmail);
        expect(store.getActions()).toEqual(expectedActions);
        done();
      } catch (error) {
        console.log(error);
      }
    });
  });

  it("Does returns an error when something go wrong when fetching all favorited articles", async (done) => {
    const { store, article } = helper(true);
    const firestoreWrapper = new FirestoreWrapper()
    
    firestoreWrapper.fetchAllFavorite.mockImplementation(() => {
      throw new Error("Error occured");
    });

    const expectedActions = [
      {
        type: FAVOURITE_LOADING,
      },
      {
        type: FAVOURITE_ERROR,
        payload: "Error occured",
      },
    ];

    store.dispatch(fetchAllFavorite(article.userEmail, firestoreWrapper)).then(() => {
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
