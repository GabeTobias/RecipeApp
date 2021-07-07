import React, { Component } from "react";
import { observer } from "mobx-react";

import ProfileThumb from "./Profile/ProfileThumb";

// TODO: Allow Rendering of different suggestion types
@observer
class Suggested extends Component {

  render() {
    return (
      <div className="Suggested pb-1">
        <h6 className="header pt-3 mb-2">Suggestions</h6>
        <hr className="mb-2"></hr>

        {/* TODO: This br thing is for spacing and kind stupid */}
        <ProfileThumb name="Profile Name" isPro="true" />
        <h3></h3>
        <ProfileThumb name="Profile Name" isPro="true" />
        <h3></h3>
        <ProfileThumb name="Profile Name" isPro="true" />
        <h3></h3>
        <ProfileThumb name="Profile Name" isPro="true" />
        <h3></h3>
        <ProfileThumb name="Profile Name" isPro="true" />
        <h1></h1>
      </div>
    );
  }
}

export default Suggested;