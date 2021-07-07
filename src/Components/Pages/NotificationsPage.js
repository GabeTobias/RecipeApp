import React, { Component} from "react";
import { observer } from "mobx-react";

import Suggested from "../Suggested";

import exploreSrc from "../../Images/Explore.png"
import notificationSrc from "../../Images/Notification.png"
import settingsSrc from "../../Images/Settings.png"
import profileImg from "../../Images/ProfileImg.png"

@observer
class NotificationsPage extends Component {

  getNotification(type, header, details) {
    let icon = exploreSrc;
    if(type == 1) icon = notificationSrc;

    return (
      <div className="NotifictionCard LinkContainer">
        <img src={icon} className="icon mb-1" width={32} /> 
        <img src={profileImg} className="profile mb-1"/>
        <h5>{header}</h5>
        <small>{details}</small>
        <a href="#" className="stretched-link"></a>
        <hr className="mb-0 p-0 mt-"></hr>
      </div>
    );
  }

  render() {


    return(
      <div className="NotificationBoard">
        <div className="NotificationHeader">
          <div className="bounds">
            <h3>Notifications</h3>
            <img src={settingsSrc} className="icon mb-1" width={22} />         
          </div>
          <hr></hr>  
        </div>
        
        {this.getNotification(0, "Explore", "Here are some post we think you'll like")}
        {this.getNotification(0, "Comment", "Arial commented on your post")}
        {this.getNotification(1, "Mention", "Derrick mention you in a post")}
        {this.getNotification(1, "Mention", "Thomas mentioned you in a comment on Derricks post")}
        {this.getNotification(0, "Comment", "Eric mentioned you in a post")}
        {this.getNotification(0, "Explore", "Here are some post we think you'll like")}
        {this.getNotification(0, "Comment", "Arial commented on your post")}
        {this.getNotification(1, "Mention", "Derrick mention you in a post")}
        {this.getNotification(1, "Mention", "Thomas mentioned you in a comment on Derricks post")}
        {this.getNotification(0, "Comment", "Eric mentioned you in a post")}
        {this.getNotification(0, "Explore", "Here are some post we think you'll like")}
        {this.getNotification(0, "Comment", "Arial commented on your post")}
        {this.getNotification(1, "Mention", "Derrick mention you in a post")}
        {this.getNotification(1, "Mention", "Thomas mentioned you in a comment on Derricks post")}
        {this.getNotification(0, "Comment", "Eric mentioned you in a post")}
      
        {/* TODO: replace this with topic suggestion */}
        <div className="ScrollBar">
          <Suggested />
        </div>

      </div>
    );
  }

}

export default NotificationsPage;