import firebase from "firebase";
import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from "../../redux/actions/types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { signUp } from "../../redux/actions/auth";


jest.mock("firebase/app", () => {
  return {
    auth: jest.fn().mockReturnValue({
      createUserWithEmailAndPassword: jest.fn(),
      signInWithEmailAndPassword: jest.fn(),
    }),
    firestore: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        set: jest.fn().mockResolvedValue({
          id: "abc123",
        }),
      }),
    })
  };
});

// const mockStore = configureStore([thunk]);

describe("Auth", () => {

  xit("succesfully firebase signup and save user in firestore", (done) => {

    const navigation = {
      navigate: jest.fn(),
    };
    
      signUp('Testuser', 'test@gmail.com', 'password')
      expect(firebase.auth().createUserWithEmailAndPassword).toHaveBeenCalled();
      // expect(store.getActions()).toEqual(expectedActions);
      done();
    // });

    // expect(firestoreMock.collection).toBeCalledWith("users");
    // expect(firestoreMock.doc).toBeCalledWith(mockUser.uid);
    // expect(firestoreMock.set).toBeCalledWith({username: mockUser.username, email: mockUser.email});
  });
});
