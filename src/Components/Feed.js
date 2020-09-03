import React, { Component} from "react";
import { observer } from "mobx-react";

import Recipe from "./Recipe/Recipe"
import Profile from "./Profile"

@observer
class Feed extends Component {
  
  render() {
    return(
      <div className="Feed">
        
        <Profile />
        <div className="Spacer"></div>

        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        
        <div className="ScrollBar">
          <div className="Scroller"></div>
          <div className="Scroller"></div>
        </div>
      </div>
    );
  }

}

export default Feed;