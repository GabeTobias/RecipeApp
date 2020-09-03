import React, { Component} from "react";
import { observer } from "mobx-react";

import profileImg from "../Images/ProfileImg.png"

@observer
class ProfileThumb extends Component {
  
  render() {
    return(
      <div className="ProfileThumb">
        <img src={profileImg} />
        <h5>{this.props.name}</h5>
        <small>{(this.props.isPro == "true") ? "Professional" : "Amatuer"}</small>
        <a href="#">View Profile</a>
      </div>
    );
  }

}

export default ProfileThumb;