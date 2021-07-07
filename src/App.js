import React, { Component} from "react";
import { observer } from "mobx-react";
import {hot} from "react-hot-loader"

import "./Sass/common.scss"
import "./Sass/profile.scss"
import "./Sass/recipe.scss"
import "./Sass/navigation.scss"
import "./Sass/messenger.scss"
import "./Sass/notification.scss"
import "./Sass/explore.scss"

import Sidebar from "./Components/Sidebar"
import NavBar from "./Components/Navbar";

import FeedPage from "./Components/Pages/FeedPage";
import ProfilePage from "./Components/Pages/ProfilePage";
import RecipePage from "./Components/Pages/RecipePage";
import MessagePage from "./Components/Pages/MessagePage";
import NotificationsPage from "./Components/Pages/NotificationsPage";
import ExplorePage from "./Components/Pages/ExplorePage";

@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true, page: "Recipe"};
  }
  
  render(){
    let mainContent;

    if(this.props.store.AppState == "Feed")    {  mainContent =  <FeedPage    store={this.props.store} /> }
    if(this.props.store.AppState == "Profile") {  mainContent =  <ProfilePage store={this.props.store} /> }
    if(this.props.store.AppState == "Recipe")  {  mainContent =  <RecipePage  store={this.props.store} /> }
    if(this.props.store.AppState == "Messages")  {  mainContent =  <MessagePage  store={this.props.store} /> }
    if(this.props.store.AppState == "Notifications")  {  mainContent =  <NotificationsPage  store={this.props.store} /> }
    if(this.props.store.AppState == "Explore")  {  mainContent =  <ExplorePage  store={this.props.store} /> }

    return(
      <div className="App">
        <Sidebar store={this.props.store}/>
        {mainContent}
        <NavBar />
      </div>
    );
  }
}

export default hot(module)(App);