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

const createUserWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of createUserWithEmailAndPassword')
})

const signInWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of signInWithEmailAndPassword')
})

const firestoreMock = {
  collection: jest.fn().mockReturnThis(),
  doc: jest.fn().mockReturnThis(),
  set: jest.fn().mockResolvedValueOnce(),
};

jest.spyOn(firebase, 'auth').mockImplementation(() => {
  return {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    currentUser: {
      uid: 5,
    },
  }
})

jest.spyOn(firebase, "firestore").mockImplementationOnce(() => firestoreMock);

describe("Auth", () => {

  it("succesfully firebase signup and save user in firestore", async(done) => {
    

    const store = mockStore({})
    const navigation = {
      navigate: jest.fn(),
    };    
    
    const expectedAction = [
      {
        type: AUTH_LOADING,
      }
    ];
       await signUp("testuser", "test@gmail.com", "password", navigation)(()=> {})
       
        try {
          expect(firebase.auth().createUserWithEmailAndPassword).toHaveBeenCalled()
          expect(firebase.auth().createUserWithEmailAndPassword).toBeCalledWith("test@gmail.com", "password")
          expect(firestoreMock.collection).toBeCalledWith('users');
          expect(firestoreMock.doc).toBeCalledWith(5)
          expect(firestoreMock.set).toBeCalledWith({email: "test@gmail.com", username: "testuser"})
          // expect(store.getActions()).toEqual(expectedAction);
          done();
        } catch (error) {
          done(error);
        }
   
  });

  it("succesfully firebase signin with firebase", async(done) => {
    const navigation = {
      navigate: jest.fn(),
    };
        await signIn("test@gmail.com", "password", navigation)(()=>{})
        try {
          expect(firebase.auth().signInWithEmailAndPassword).toHaveBeenCalled()
          expect(firebase.auth().signInWithEmailAndPassword).toBeCalledWith("test@gmail.com", "password")
          done();
        } catch (error) {
          done(error);
        }
   
  });
});
