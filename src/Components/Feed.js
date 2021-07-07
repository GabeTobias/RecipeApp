import React, { Component} from "react";
import { observer } from "mobx-react";

import Recipe from "./Recipe/Recipe"
import Suggested from "./Suggested"

@observer
class Feed extends Component {
  
  render() {
    return(
      <div className="Feed">
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    );
  }

}

export default Feed;