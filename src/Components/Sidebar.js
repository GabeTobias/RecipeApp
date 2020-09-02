import React, { Component} from "react";
import { observer } from "mobx-react";

import homeSrc from "../Images/Home.png"
import profileSrc from "../Images/Profile.png"
import bookmarkSrc from "../Images/Bookmark.png"

import homeActSrc from "../Images/Home-Active.png"
import profileActSrc from "../Images/Profile-Active.png"
import bookmarkActSrc from "../Images/Bookmark-Active.png"

@observer
class Sidebar extends Component {
  
  render() {
    return(
      <div className="Sidebar">
        <h4>
          <img src={homeActSrc} className="icon" width="21" /> 
          <a href="#" className="active">Home </a>
        </h4>

        <h4>
          <img src={profileSrc} className="icon" width="20"/> 
          <a href="#">Profile</a>
        </h4>
        
        <h4>
          <img src={bookmarkSrc} className="icon" width="15"/> 
          <a href="#">Saved</a>
        </h4>
      </div>
    );
  }

}

export default Sidebar;