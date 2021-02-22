import firebase from "firebase";
import { signUp, signIn } from "../../redux/actions/auth";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from "../../redux/actions/types";

const mockStore = configureStore([thunk]);

const createUserWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of createUserWithEmailAndPassword')
})

const signInWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of signInWithEmailAndPassword')
})

jest.spyOn(firebase, 'auth').mockImplementation(() => {
  return {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  }
})

describe("Auth", () => {
  it("succesfully firebase signup and save user in firestore", (done) => {
    const store = mockStore({})
    const navigation = {
      navigate: jest.fn(),
    };
    
    const expectedAction = [
      {
        type: AUTH_LOADING,
      }
    ];
    store
      .dispatch(signUp("test@gmail.com", "password", navigation))
        try {
          expect(firebase.auth().createUserWithEmailAndPassword).toHaveBeenCalled()
          expect(firebase.auth().createUserWithEmailAndPassword).toBeCalledWith("test@gmail.com", "password")
          expect(store.getActions()).toEqual(expectedAction);
          done();
        } catch (error) {
          done(error);
        }
   
  });

  it("succesfully firebase signin with firebase", (done) => {
    const store = mockStore({})
    const navigation = {
      navigate: jest.fn(),
    };
    
    const expectedAction = [
      {
        type: AUTH_LOADING,
      }
    ];
    store
      .dispatch(signIn("test@gmail.com", "password", navigation))
        try {
          expect(firebase.auth().signInWithEmailAndPassword).toHaveBeenCalled()
          expect(firebase.auth().signInWithEmailAndPassword).toBeCalledWith("test@gmail.com", "password")
          expect(store.getActions()).toEqual(expectedAction);
          done();
        } catch (error) {
          done(error);
        }
   
  });
});
