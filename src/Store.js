import { observable } from "mobx"

class Store {
  @observable Title = "Gabriel was here";
}

var store = window.store = new Store;

export default store;