import React, { Component} from "react";
import { observer } from "mobx-react";

import Recipe from "../Recipe/Recipe"; 
import Suggested from "../Suggested";

@observer
class ExplorePage extends Component {
  
  render() {
    return(
      <div className="MainFeed">
        <div className="ScrollBar">
          <Suggested />
        </div>

        <div className="ExploreHeader">
          <h2>Explore</h2>
          <small>Feed of content trending in your circle</small>
          <a href="#">Settings</a>
          <hr></hr>
        </div>

        <div className="ExploreCategory LinkContainer">
          <h5>SALAD</h5>
          <small>Trending in America</small>
          <a href="#" className="stretched-link">More</a>
        </div>

        <Recipe />
        <Recipe />

        <div className="ExploreCategory LinkContainer">
          <h5>SEAFOOD</h5>
          <small>Trending in Georgia</small>
          <a href="#" className="stretched-link">More</a>
        </div>

        <Recipe />
        <Recipe />
        <Recipe />

      </div>
    );
  }

}

export default ExplorePage;