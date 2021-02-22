import firebase from "firebase";
import { signUp } from "../../redux/actions/auth";

const createUserWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of createUserWithEmailAndPassword')
})

jest
  .spyOn(firebase, 'initializeApp')
  .mockImplementation(() => {
    return {
      auth: () => {
        return {
          createUserWithEmailAndPassword,
        }
      }
    }
  })

jest.spyOn(firebase, 'auth').mockImplementation(() => {
  return {
    createUserWithEmailAndPassword
  }
})

describe("Auth", () => {
  it("succesfully firebase signup and save user in firestore", (done) => {
    const navigation = {
      navigate: jest.fn(),
    };
    signUp("Testuser", "test@gmail.com", "password", navigation);
    expect(firebase.auth().createUserWithEmailAndPassword).toHaveBeenCalled()
    // expect(firebase.auth().createUserWithEmailAndPassword).toBeCalledWith("test@gmail.com", "password")
    done();
  });
});
