import React, { Component } from "react";
import { observer } from "mobx-react";

import Feed from "../Feed";
import Saved from "../Profile/Saved";
import Profile from "../Profile/Profile";
import Following from "../Profile/Following";
import Suggested from "../Suggested";

@observer
class ProfilePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let scrollContent;

    if (this.props.store.ProfileState == "Instructions") { scrollContent = <Feed /> }
    if (this.props.store.ProfileState == "Following") { scrollContent = <Following /> }
    if (this.props.store.ProfileState == "Saved") { scrollContent = <Saved /> }

    return (
      <div>
        <div className="ScrollBar">
          <Suggested />
        </div>
        <Profile store={this.props.store} />
        {scrollContent}
      </div>
    );
  }

}

export default ProfilePage;