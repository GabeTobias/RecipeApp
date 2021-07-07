import { action, observable } from "mobx"

class Store {
  @observable Title = "Gabriel was here";
  @observable AppState = "Feed";
  @observable ProfileState = "Instructions";

  @action.bound
  SetPage(pageName) {
    this.AppState = pageName;
  }

  @action.bound
  SetProfileState(state) {
    this.ProfileState = state;
  }
  
}

var store = window.store = new Store;

export default store;