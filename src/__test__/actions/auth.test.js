import firebase from "firebase";
import { signUp, signIn } from "../../redux/actions/auth";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from "../../redux/actions/types";
import "firebase/firestore";

const mockStore = configureStore([thunk]);

const payload = {
  username: "testuser",
  email: "test@gmail.com",
  password: "password",
};
const createUserWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve({ user: payload });
});

const signInWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve({ user: payload });
});

const firestoreMock = {
  collection: jest.fn().mockReturnThis(),
  doc: jest.fn().mockReturnThis(),
  set: jest.fn().mockResolvedValueOnce(),
};

jest.spyOn(firebase, "firestore").mockImplementationOnce(() => firestoreMock);

const auth = jest.spyOn(firebase, "auth").mockImplementation(() => {
  return {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    currentUser: {
      uid: "5",
    },
  };
});

describe("Authentication", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("succesfully firebase signup and save user in firestore", async (done) => {
    const store = mockStore({});

    const navigation = {
      navigate: jest.fn(),
    };

    const expectedActions = [
      {
        type: AUTH_LOADING,
      },
      {
        type: AUTH_SUCCESS,
        payload,
      },
    ];

    store
      .dispatch(
        signUp(payload.username, payload.email, payload.password, navigation)
      )
      .then(() => {
        try {
          expect(
            firebase.auth().createUserWithEmailAndPassword
          ).toHaveBeenCalled();
          expect(firebase.auth().createUserWithEmailAndPassword).toBeCalledWith(
            payload.email,
            payload.password
          );
          expect(firestoreMock.collection).toBeCalledWith("users");
          expect(firestoreMock.doc).toBeCalledWith("5");
          expect(firestoreMock.set).toBeCalledWith({
            username: payload.username,
            email: payload.email,
          });
          expect(store.getActions()).toEqual(expectedActions);

          done();
        } catch (error) {
          console.log(error);
        }
      });
  });

  it("firebase signup returned error and failed to save a user in firestore", async (done) => {
    createUserWithEmailAndPassword.mockImplementation(() => {
      return Promise.reject(new Error("Error occured"));
    });

    const message = "Error occured";
    const store = mockStore({});

    const navigation = {
      navigate: jest.fn(),
    };

    const expectedActions = [
      {
        type: AUTH_LOADING,
      },
      {
        type: AUTH_ERROR,
        payload: message,
      },
    ];

    store
      .dispatch(
        signUp(payload.username, payload.email, payload.password, navigation)
      )
      .then(() => {
        try {
          expect(store.getActions()).toEqual(expectedActions);

          done();
        } catch (error) {
          console.log(error);
        }
      });
  });

  it("succesfully firebase signin with firebase", async (done) => {
    const store = mockStore({});

    const navigation = {
      navigate: jest.fn(),
    };

    const expectedActions = [
      {
        type: AUTH_LOADING,
      },
      {
        type: AUTH_SUCCESS,
        payload,
      },
    ];

    store
      .dispatch(signIn(payload.email, payload.password, navigation))
      .then(() => {
        try {
          expect(firebase.auth().signInWithEmailAndPassword).toHaveBeenCalled();
          expect(firebase.auth().signInWithEmailAndPassword).toBeCalledWith(
            payload.email,
            payload.password
          );
          expect(store.getActions()).toEqual(expectedActions);
          done();
        } catch (error) {
          console.log(error);
        }
      });
  });

  it("firebase signin returned error and failed to save a user in firestore", async (done) => {
    signInWithEmailAndPassword.mockImplementation(() => {
      return Promise.reject(new Error("Error occured"));
    });
    const message = "Error occured";
    const store = mockStore({});

    const navigation = {
      navigate: jest.fn(),
    };

    const expectedActions = [
      {
        type: AUTH_LOADING,
      },
      {
        type: AUTH_ERROR,
        payload: message,
      },
    ];

    store
      .dispatch(signIn(payload.email, payload.password, navigation))
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
