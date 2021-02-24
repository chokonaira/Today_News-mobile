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

const collection = jest.fn(() => {
  return Promise.resolve('result of signInWithEmailAndPassword')
})


jest.spyOn(firebase, 'auth').mockImplementation(() => {
  return {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    currentUser: {
      uid: 1,
    },
  }
})

jest.spyOn(firebase, "firestore").mockImplementation(() => {
  return {
    collection,
  }
});

describe("Auth", () => {

  it("succesfully firebase signup and save user in firestore", async(done) => {
    

    // const store = mockStore({})
    const navigation = {
      navigate: jest.fn(),
    };

    await signUp("testuser", "test@gmail.com", "password", navigation)(()=> {});
    
    expect(firebase.auth().createUserWithEmailAndPassword).toHaveBeenCalled()
    expect(firebase.auth().createUserWithEmailAndPassword).toBeCalledWith("test@gmail.com", "password")
    done()
    // const expectedAction = [
    //   {
    //     type: AUTH_LOADING,
    //   }
    // ];
    // store
    //   .dispatch(signUp("testuser", "test@gmail.com", "password", navigation))
    //     try {
          
    //       // expect(firebase.firestore().collection).toBeCalledWith('users');
    //       expect(store.getActions()).toEqual(expectedAction);
    //       done();
    //     } catch (error) {
    //       done(error);
    //     }
   
  });

  // xit("unsuccesfully firebase signup with error", (done) => {
  //   const store = mockStore({})
  //   const navigation = {
  //     navigate: jest.fn(),
  //   };

  //   const message = "Invalid email format";
    
  //   const expectedAction = [
  //     {
  //       type: AUTH_LOADING,
  //     },
  //     {
  //       type: AUTH_ERROR,
  //       payload: {
  //         message,
  //       },
  //     }
  //   ];
  //   store.dispatch(signUp("tesgmail", "password", navigation))
  //       try {
  //         expect(firebase.auth().createUserWithEmailAndPassword).toHaveBeenCalled()
  //         expect(firebase.auth().createUserWithEmailAndPassword).toBeCalledWith("tesgmail", "password")
  //         expect(firebase.firestore().collection().doc).toBeCalledWith("users")
    

  //         console.log(store.getActions())
  //         expect(store.getActions()).toEqual(expectedAction);
  //         done();
  //       } catch (error) {
  //         done(error);
  //       }
   
  // });

  // it("succesfully firebase signin with firebase", (done) => {
  //   const store = mockStore({})
  //   const navigation = {
  //     navigate: jest.fn(),
  //   };
    
  //   const expectedAction = [
  //     {
  //       type: AUTH_LOADING,
  //     }
  //   ];
  //   store
  //     .dispatch(signIn("test@gmail.com", "password", navigation))
  //       try {
  //         expect(firebase.auth().signInWithEmailAndPassword).toHaveBeenCalled()
  //         expect(firebase.auth().signInWithEmailAndPassword).toBeCalledWith("test@gmail.com", "password")
  //         expect(store.getActions()).toEqual(expectedAction);
  //         done();
  //       } catch (error) {
  //         done(error);
  //       }
   
  // });
});
