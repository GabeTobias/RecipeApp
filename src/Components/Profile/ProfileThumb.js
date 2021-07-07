import React, { Component} from "react";
import { observer } from "mobx-react";

import profileImg from "../../Images/ProfileImg.png"

@observer
class ProfileThumb extends Component {
  
  render() {
    return(
      <div className="ProfileThumb LinkContainer">
        <img src={profileImg} />
        <h5>{this.props.name}</h5>
        <small>{(this.props.isPro == "true") ? "Professional" : "Amatuer"}</small>
        <a href="#" className="stretched-link">View</a>
      </div>
    );
  }

}

export default ProfileThumb;