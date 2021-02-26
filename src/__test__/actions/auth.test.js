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


describe("Succesfull Authentication", () => {
  const createUserWithEmailAndPassword = jest.fn(() => {
    return Promise.resolve("result of createUserWithEmailAndPassword");
  });

  const signInWithEmailAndPassword = jest.fn(() => {
    return Promise.resolve("result of signInWithEmailAndPassword");
  });

  beforeEach(() => {
    jest.restoreAllMocks();
    const firestoreMock = {
      collection: jest.fn().mockReturnThis(),
      doc: jest.fn().mockReturnThis(),
      set: jest.fn().mockResolvedValueOnce(),
    }
    
    jest.spyOn(firebase, "firestore").mockImplementationOnce(() => firestoreMock);

    jest.spyOn(firebase, "auth").mockImplementation(() => {
      return {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        currentUser: {
          uid: 5,
        },
      };
    });
  });

  xit("succesfully firebase signup and save user in firestore", async (done) => {
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
    done();
  });

  it("succesfully firebase signin with firebase", async (done) => {

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

  const createUserWithEmailAndPassword = jest.fn(() => {
    return Promise.reject(new Error("Failed"));
  });

  const signInWithEmailAndPassword = jest.fn(() => {
    return Promise.reject(new Error("Failed"));
  });

  beforeEach(() => {   
    jest.restoreAllMocks(); 
    jest.spyOn(firebase, "auth").mockImplementation(() => {
      return {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword
      };
    });
  });

  xit("firebase signup returned error and failed to save a user in firestore", async (done) => {
  
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
    done();
  });

  it("firebase signin return an error", async (done) => {

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
