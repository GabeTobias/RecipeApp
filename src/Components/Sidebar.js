import React, { Component} from "react";
import { observer } from "mobx-react";

import homeSrc from "../Images/Home.png"
import profileSrc from "../Images/Profile.png"
import inboxSrc from "../Images/Inbox.png"
import exploreSrc from "../Images/Explore.png"
import notificationSrc from "../Images/Notification.png"

import homeActSrc from "../Images/Home-Active.png"
import profileActSrc from "../Images/Profile-Active.png"
import inboxActSrc from "../Images/Inbox-Active.png"
import exploreActSrc from "../Images/Explore-Active.png"
import notificationActSrc from "../Images/Notification-Active.png"

@observer
class Sidebar extends Component {
  
  ChangeState(page) {
    this.props.store.SetPage(page);
  }

  RenderPageLink(page, name, icon, iconActive, size)
  {
    let className = "";
    let iconState = iconActive; 
    if(this.props.store.AppState == page) {
      className = "active";
      iconState = icon;
    }

    return(
      <h4>
        <img src={iconState} className="icon mb-1" width={size} /> 
        <a href="#" onClick={() => this.ChangeState(page)} className={className}>{name}</a>
      </h4>
    );
  }

  render() {
    return(
      <div className="Sidebar">
        {this.RenderPageLink("Feed", "Home", homeActSrc, homeSrc,"21")}
        {this.RenderPageLink("Explore", "Explore", exploreActSrc, exploreSrc,"21")}
        {this.RenderPageLink("Notifications", "Notifications", notificationActSrc, notificationSrc,"21")}
        {this.RenderPageLink("Messages", "Messages", inboxActSrc, inboxSrc,"21")}
        {this.RenderPageLink("Profile", "Profile", profileActSrc, profileSrc,"21")}
      </div>
    );
  }

}

export default Sidebar;