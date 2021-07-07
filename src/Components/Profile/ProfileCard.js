import React, { Component } from "react";
import { observer } from "mobx-react";

import ProfileThumb from "./ProfileThumb"

@observer
class ProfileCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ProfileCard">
        <div className="Card pt-3 mb-3 pb-4">
          <ProfileThumb name="Profile Name" isPro="true" />
        </div>
      </div>
    );
 }
}

export default ProfileCard;