import React, { Component} from "react";
import { observer } from "mobx-react";
import {hot} from "react-hot-loader"

import "./Sass/styles.scss"

import Sidebar from "./Components/Sidebar"
import NavBar from "./Components/Navbar";
import Feed from "./Components/Feed";

@observer
class App extends Component {
  render(){
    return(
      <div className="App">
        <Feed />
        <Sidebar />
        <NavBar />
      </div>
    );
  }
}

export default hot(module)(App);