import React, { Component} from "react";
import { observer } from "mobx-react";

import Feed from "../Feed";
import Suggested from "../Suggested";

import profileImg from "../../Images/ProfileImg.png"

@observer
class FeedPage extends Component {
  
  render() {
    return(
      <div className="MainFeed">
        <div className="ScrollBar">
          <Suggested />
        </div>

        <div className="FeedHeader">
          <h4 className="mb-0">Home</h4>
          <a href="#">Settings</a>
          <hr></hr>
        </div>

        <div className="CreatePost">
            <img src={profileImg} />
            <input type="text" className="form-control" placeholder="Whats New?"></input>
            <button type="submit" class="btn btn-primary">Create</button>
        </div>
      
        <Feed />
      </div>
    );
  }

}

export default FeedPage;