export class FakeFirestore {

  constructor(data){
    this.data = data;
    this.collectionWasCalledWith = '';
    this.whereWasCalledWith = [];
  }

  collection(name) {
    this.collectionWasCalledWith = name;
    return this;
  }
  
  where(key, equality, value) {
    this.whereWasCalledWith.push([key, equality, value])
    return this;
  }
  
  add() {
    return this;
  }
  
  get() {
    return this.data
  }
}