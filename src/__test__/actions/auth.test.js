import firebase from "firebase";
import { signUp } from "../../redux/actions/auth";

jest.spyOn(firebase, 'initializeApp')
.mockImplementation( () => {
  return {
    auth: jest.fn().mockReturnValue({
      createUserWithEmailAndPassword: jest.fn(() => {
        return Promise.resolve('result of createUserWithEmailAndPassword')
      }),
      signInWithEmailAndPassword: jest.fn(),
    }),
    firestore: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        doc: jest.fn().mockReturnValue({
          set: jest.fn().mockResolvedValue({
            id: "abc123",
          }),
        }),
      }),
    }),
  };
})

// jest.spyOn(firebase, 'auth').mockImplementation(() => {
//   return {
//     createUserWithEmailAndPassword: jest.fn(() => {
//       return Promise.resolve('result of createUserWithEmailAndPassword')
//     })
//   }
// })

describe("Auth", () => {
  it("succesfully firebase signup and save user in firestore", (done) => {
    const navigation = {
      navigate: jest.fn(),
    };
    signUp("Testuser", "test@gmail.com", "password", navigation);
    expect(firebase.auth().createUserWithEmailAndPassword).toHaveBeenCalled()
    done();
  });
});
