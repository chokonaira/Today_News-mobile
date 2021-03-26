import { FirestoreWrapper } from "../../redux/actions/FirestoreWrapper";
import firebase from "firebase";
import { FakeFirestore } from "./FakeFirestore";

const dataMock = jest.fn()

const refMock = {
  delete: jest.fn(),
};

const favoritedArticles = {
  docs:[
  {
    userEmail: "email.com",
    url: "url.com",
    publishedAt: "2021-01-01",
    ref: refMock,
    data: dataMock
  },
]};

const myFirestore = new FakeFirestore(favoritedArticles);
jest.spyOn(firebase, "firestore").mockImplementation(() => myFirestore);

const article = {
  id: '1233',
  userEmail: "email.com",
  url: "url.com",
  publishedAt: "2021-01-01",
};

describe("Firestore", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    myFirestore.reset()
  });

  it("succesfully adds a favorited article to firestore", async () => {
    const wrapper = new FirestoreWrapper();
    await wrapper.addFavorite(article);

    expect(myFirestore.collectionWasCalledWith).toEqual("favorites")
    expect(myFirestore.docWasCalledWith).toEqual(article.id)
    expect(myFirestore.setWasCalledWith).toEqual(article)
  });

  it("succesfully queries and removes a favorited article from firestore", async () => {
    const wrapper = new FirestoreWrapper();
    await wrapper.removeFavorite(article, article.userEmail);

    expect(myFirestore.collectionWasCalledWith).toEqual("favorites")
    expect(myFirestore.whereWasCalledWith[0]).toEqual(["userEmail", "==", article.userEmail])
    expect(myFirestore.whereWasCalledWith[1]).toEqual(["url", "==", article.url])
    expect(myFirestore.whereWasCalledWith[2]).toEqual(["publishedAt", "==", article.publishedAt])
    expect(refMock.delete).toHaveBeenCalled();
  });

  it("succesfully query and fectch all favorited article for a user", async () => {
    const wrapper = new FirestoreWrapper()
    await wrapper.fetchAllFavorite(article.userEmail)

    expect(myFirestore.collectionWasCalledWith).toEqual("favorites")
    expect(myFirestore.whereWasCalledWith[0]).toEqual(["userEmail", "==", article.userEmail])
    expect(dataMock).toHaveBeenCalled();
  });

  it("succesfully adds a commented article to firestore", async () => {
    const wrapper = new FirestoreWrapper();
    await wrapper.addComment(article);

    expect(myFirestore.collectionWasCalledWith).toEqual("comments")
    expect(myFirestore.docWasCalledWith).toEqual(article.id)
    expect(myFirestore.setWasCalledWith).toEqual(article)
  });

  it("succesfully query and fectch all commented article to firestore", async () => {
    const wrapper = new FirestoreWrapper();
    await wrapper.fetchAllComments(article.url);

    expect(myFirestore.collectionWasCalledWith).toEqual("comments")
    expect(myFirestore.whereWasCalledWith[0]).toEqual(["url", "==", article.url])
    expect(dataMock).toHaveBeenCalled();
  });
});
