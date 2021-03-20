import * as firebase from "firebase";
import "firebase/firestore";

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
    return snapshot.docs.map((doc) => doc.data());
  }
}
