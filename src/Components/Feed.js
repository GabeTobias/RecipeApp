import React, { Component} from "react";
import { observer } from "mobx-react";

@observer
class Feed extends Component {
  
  render() {
    return(
      <div className="Feed">
        <div className="Card"></div>
        <div className="Card"></div>
        <div className="Card"></div>
        <div className="Card"></div>
        <div className="Card"></div>
        <div className="Card"></div>
        <div className="Card"></div>
        <div className="Card"></div>
        
        <div className="ScrollBar">
          <div className="Scroller"></div>
          <div className="Scroller"></div>
        </div>
      </div>
    );
  }

}

export default Feed;