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

const database = jest.spyOn(firebase, "firestore").mockImplementationOnce(() => {
  return (firestoreMock = {
    collection: jest.fn().mockReturnThis(),
    doc: jest.fn().mockReturnThis(),
    set: jest.fn().mockResolvedValueOnce(),
  });
});


describe("Succesfull Authentication", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const createUserWithEmailAndPassword = jest.fn(() => {
    return Promise.resolve("result of createUserWithEmailAndPassword");
  });

  const spy = jest.spyOn(firebase, "auth").mockImplementation(() => {
    return {
      createUserWithEmailAndPassword,
      currentUser: {
        uid: 5,
      },
    };
  });

  it("succesfully firebase signup and save user in firestore", async (done) => {
    const navigation = {
      navigate: jest.fn(),
    };

    await signUp(
      "testuser",
      "test@gmail.com",
      "password",
      navigation
    )(() => {});

    expect(firebase.auth().createUserWithEmailAndPassword).toHaveBeenCalled();
    expect(firebase.auth().createUserWithEmailAndPassword).toBeCalledWith(
      "test@gmail.com",
      "password"
    );
    expect(firestoreMock.collection).toBeCalledWith("users");
    expect(firestoreMock.doc).toBeCalledWith(5);
    expect(firestoreMock.set).toBeCalledWith({
      email: "test@gmail.com",
      username: "testuser",
    });
    spy.mockReset();
    database.mockReset()
    done();
  });

  it("succesfully firebase signin with firebase", async (done) => {
    const signInWithEmailAndPassword = jest.fn(() => {
      return Promise.resolve("result of signInWithEmailAndPassword");
    });
    const spy = jest.spyOn(firebase, "auth").mockImplementation(() => {
      return {
        signInWithEmailAndPassword,
      };
    });
    const navigation = {
      navigate: jest.fn(),
    };
    await signIn("test@gmail.com", "password", navigation)(() => {});
    expect(firebase.auth().signInWithEmailAndPassword).toHaveBeenCalled();
    expect(firebase.auth().signInWithEmailAndPassword).toBeCalledWith(
      "test@gmail.com",
      "password"
    );
    done();
  });
});

describe("Unsuccesfull Authentication", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const createUserWithEmailAndPassword = jest.fn(() => {
    return Promise.reject(new Error("Failed"));
  });
  const spy = jest.spyOn(firebase, "auth").mockImplementation(() => {
    return {
      createUserWithEmailAndPassword,
    };
  });

  it("firebase signup returned error and failed to save a user in firestore", async (done) => {
    const navigation = {
      navigate: jest.fn(),
    };

    await signUp(
      "testuser",
      "test@gmail.com",
      "password",
      navigation
    )(() => {});

    expect(firebase.auth().createUserWithEmailAndPassword).toHaveBeenCalled();
    expect(firebase.auth().createUserWithEmailAndPassword).toBeCalledWith(
      "test@gmail.com",
      "password"
    );
    expect(firebase.auth().currentUser).toEqual(undefined);
    expect(database.mock.instances).toEqual([]);
    spy.mockReset();
    database.mockReset()
    done();
  });

  it("firebase signin return an error", async (done) => {
    const signInWithEmailAndPassword = jest.fn(() => {
      return Promise.reject(new Error("Failed"));
    });
    jest.spyOn(firebase, "auth").mockImplementation(() => {
      return {
        signInWithEmailAndPassword,
      };
    });
    const navigation = {
      navigate: jest.fn(),
    };
    await signIn("test@gmail.com", "password", navigation)(() => {});
    expect(firebase.auth().signInWithEmailAndPassword).toHaveBeenCalled();
    expect(firebase.auth().signInWithEmailAndPassword).toBeCalledWith(
      "test@gmail.com",
      "password"
    );
    expect(firebase.auth().currentUser).toEqual(undefined);
    done();
  });
});
