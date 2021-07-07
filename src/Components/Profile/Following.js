import React, { Component} from "react";
import { observer } from "mobx-react";

import ProfileCard from "./ProfileCard"
import Suggested from "../Suggested";

@observer
class Following extends Component {
  
  render() {
    return(
      <div className="Feed">
        <ProfileCard card={true}/>
        <ProfileCard card={true}/>
        <ProfileCard card={true}/>
        <ProfileCard card={true}/>
        <ProfileCard card={true}/>
        <ProfileCard card={true}/>
        <ProfileCard card={true}/>
        <ProfileCard card={true}/>

        <div className="ScrollBar">
          <Suggested />
        </div>

      </div>
    );
  }

}

export default Following;