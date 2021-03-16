import firebase from "firebase";
import {
  FirestoreWrapper,
} from '../../redux/actions/FirestoreWrapper'


const favoritedArticle = [{
  userEmail: 'email.com',
  url: 'url.com',
  publishedAt: '2021-01-01'
}]

const docsMock = jest.fn(() => {
  return {
    doc: jest.fn(() => {
      return {
        data: jest.fn().mockResolvedValueOnce(),
      }
    })
  };
});

const snapshotMock = jest.fn(() => {
  return {
    onSnapshot: jest.fn().mockImplementation(()=>  Promise.resolve(favoritedArticle)),
    ref: jest.fn(() => {
      return {
        delete: jest.fn().mockResolvedValueOnce(),
      }
    })
  };
});

const getMock = jest.fn(() => {
  return {
    get: jest.fn().mockResolvedValueOnce(),
  };
})

const whereMock = jest.fn(() => {
  return {
    where: whereMock,
    get: getMock,
    onSnapshot: snapshotMock
  };
})

const firestoreMock = {
  collection: jest.fn().mockReturnThis(),
  doc: jest.fn().mockReturnThis(),
  set: jest.fn().mockResolvedValueOnce(),
  where: whereMock,
  get: getMock,
  onSnapshot: snapshotMock,
  docs: docsMock
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
    expect(firestoreMock.get).toHaveBeenCalled();
    // expect(firestoreMock.onSnapshot).toHaveBeenCalled();
    done()
  });

  it("succesfully query and fectch all favorited article for a user", (done) => {
    const wrapper = new FirestoreWrapper()
    wrapper.fetchAllFavorite(article.userEmail)
  
    expect(firestoreMock.collection).toBeCalledWith("favorites");
    expect(firestoreMock.where).toHaveBeenNthCalledWith(1, "userEmail", "==", article.userEmail);
    expect(firestoreMock.get).toHaveBeenCalled();
    // expect(firestoreMock.docs).toHaveBeenCalled();
    done()
  });
})


