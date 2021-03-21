export class FakeFirestore {
  constructor(data) {
    this.data = data;
    this.collectionWasCalledWith = "";
    this.docWasCalledWith = "";
    this.setWasCalledWith = {};
    this.whereWasCalledWith = [];
  }

  collection(name) {
    this.collectionWasCalledWith = name;
    return this;
  }

  doc(id) {
    this.docWasCalledWith = id;
    return this;
  }

  set(article) {
    this.setWasCalledWith = article;
    return this;
  }

  where(key, equality, value) {
    this.whereWasCalledWith.push([key, equality, value]);
    return this;
  }

  get() {
    return this.data;
  }
}
