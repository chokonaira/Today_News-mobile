import firebase from "firebase";

export class FirestoreWrapper {
  async addFavorite(article) {
    await firebase
      .firestore()
      .collection("favorites")
      .doc(article.id)
      .set(article);
  }

  async removeFavorite(article, email) {
    const favoritesRef = firebase.firestore().collection("favorites");
    const snapshot = await favoritesRef
      .where("userEmail", "==", email)
      .where("url", "==", article.url)
      .where("publishedAt", "==", article.publishedAt)
      .get();
    snapshot.docs.map((doc) => doc.ref.delete());
  }

  async fetchAllFavorite(email) {
    const favoritesRef = firebase.firestore().collection("favorites");
    const snapshot = await favoritesRef.where("userEmail", "==", email).get();
    const result = snapshot.docs.map((doc) => doc.data());
    return result;
  }

  async addComment(article) {
    await firebase
      .firestore()
      .collection("comments")
      .doc(article.id)
      .set(article);
  }

  async fetchAllComments(articleUrl) {
    const commentRef = firebase.firestore().collection("comments");
    const snapshot = await commentRef
      .where("articleUrl", "==", articleUrl)
      .get();
    const result = snapshot.docs.map((doc) => doc.data());
    return result;
  }
}
