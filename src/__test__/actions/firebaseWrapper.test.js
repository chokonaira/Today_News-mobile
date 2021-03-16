import firebase from "firebase";
import {
  FirestoreWrapper
} from '../../redux/actions/FirebaseWrapper'


const favoritedArticle = [{
  userEmail: 'email.com',
  url: 'url.com',
  publishedAt: '2021-01-01'
}]

// const collection = jest.fn(() => {
//   return {
//     doc: jest.fn(() => {
//       return {
//         collection: collection,
//         update: jest.fn(() => Promise.resolve(true)),
//         onSnapshot: jest.fn(() => Promise.resolve(true)),
//         get: jest.fn(() => Promise.resolve(true))
//       }
//     }),
//     where: jest.fn(() => {
//       return {
//         get: jest.fn(() => Promise.resolve(favoritedArticle)),
//         onSnapshot: jest.fn(() => Promise.resolve(true)),
//       }
//     })
//   }
// });


const firestoreMock = {
  collection: jest.fn().mockReturnThis(),
  doc: jest.fn().mockReturnThis(),
  set: jest.fn().mockResolvedValueOnce(),
  where: jest.fn(() => {
    return {
      get: jest.fn(() => mockResolvedValueOnce(favoritedArticle)),
      onSnapshot: jest.fn(() => mockReturnThis()),
    }
  })
};

jest.spyOn(firebase, "firestore").mockImplementation(() => firestoreMock);


const article = {
  userEmail: 'email.com',
  url: 'url.com',
  publishedAt: '2021-01-01'
}

describe('Firestore', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it("succesfully queries and removes a favorited article from firestore", async (done) => {
    const wrapper = new FirestoreWrapper()
    await wrapper.removeFavorite(article, article.userEmail)
  
    expect(firestoreMock.collection).toBeCalledWith("favorites");
  
    // expect(firestoreMock.collection).toBeCalledWith("favorites");
    done()
  });
})


