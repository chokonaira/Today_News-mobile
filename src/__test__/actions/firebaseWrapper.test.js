import {
  FirestoreWrapper,
} from '../../redux/actions/FirestoreWrapper'
import { mockFirebase } from 'firestore-jest-mock';
import { mockCollection, mockWhere } from 'firestore-jest-mock/mocks/firestore';
import firebase from "firebase";
import "firebase/firestore";

jest.mock('firebase')

const favoritedArticle = [
  {
    userEmail: 'email.com',
    url: 'url.com',
    publishedAt: '2021-01-01'
  }
]

const article = {
  userEmail: 'email.com',
  url: 'url.com',
  publishedAt: '2021-01-01'
}

describe('Firestore', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  mockFirebase({
    database: {
      favorites: [
        {
          userEmail: 'email.com',
          url: 'url.com',
          publishedAt: '2021-01-01'
        },
        {
          userEmail: 'gmail.com',
          url: 'http.com',
          publishedAt: '2021-01-01'
        },
      ],
    },
  });

  it("succesfully queries and removes a favorited article from firestore", async () => {
    const db = firebase.firestore();
    const wrapper = new FirestoreWrapper()
    await wrapper.removeFavorite(article, article.userEmail)
    expect(mockCollection).toHaveBeenCalledWith('favorites');
    
  });

  // it("succesfully query and fectch all favorited article for a user", (done) => {
  //   const wrapper = new FirestoreWrapper()
  //   wrapper.fetchAllFavorite(article.userEmail)
  
  //   expect(firestoreMock.collection).toBeCalledWith("favorites");
  //   expect(firestoreMock.where).toHaveBeenNthCalledWith(1, "userEmail", "==", article.userEmail);
  //   expect(firestoreMock.get).toHaveBeenCalled();
  //   // expect(firestoreMock.docs).toHaveBeenCalled();
  //   done()
  // });
})


