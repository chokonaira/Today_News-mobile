import firebase from "firebase";
import {
  FirestoreWrapper
} from '../../redux/actions/FirestoreWrapper'


const favoritedArticle = [{
  userEmail: 'email.com',
  url: 'url.com',
  publishedAt: '2021-01-01'
}]

const whereMock = jest.fn(() => {
  return {
    get: jest.fn(() => mockResolvedValueOnce(favoritedArticle)),
    where: whereMock,
    onSnapshot: jest.fn(() => mockReturnThis()),
  };
})

const firestoreMock = {
  collection: jest.fn().mockReturnThis(),
  doc: jest.fn().mockReturnThis(),
  set: jest.fn().mockResolvedValueOnce(),
  where: whereMock
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

  it("succesfully queries and removes a favorited article from firestore", (done) => {
    const wrapper = new FirestoreWrapper()
    wrapper.removeFavorite(article, article.userEmail)
  
    expect(firestoreMock.collection).toBeCalledWith("favorites");
    expect(firestoreMock.where).toHaveBeenNthCalledWith(1, "userEmail", "==", article.userEmail);
    expect(firestoreMock.where).toHaveBeenNthCalledWith(2, "url", "==", article.url);
    expect(firestoreMock.where).toHaveBeenNthCalledWith(3, "publishedAt", "==", article.publishedAt);
  
    done()
  });
})


