import React, { Component} from "react";
import { observer } from "mobx-react";

import ProfileThumb from "../Profile/ProfileThumb";
import profileImg from "../../Images/ProfileImg.png"

@observer
class MessagePage extends Component {
  
  //TODO: Maybe this should be a seperate class?
  getUserDialogue(active) {
    let className = "select pr-2"; 
    if(active) className += " active";

    return (
      <div className="UserDialogue LinkContainer">
        <div className={className}>
          <img src={profileImg} />
          <h5 >Profile Name</h5>
          <small>Hey, I was wondering if...</small>
          <a href="#" className="stretched-link">1 week</a>
        </div>
        <hr></hr>
      </div>
    );
  }

  //TODO: This needs to be completely reworked
  getUserMessage(sender, message){
    let className = "UserMessage"; 
    if(sender) className += " sender";

    return (
      <div className={className}>
        <small>{message}</small>
      </div>
    );
  }

  render() {
    return(
      <div className="Messanger">
        <div class="container-fluid">
          <div class="row">
            <div className="Users col-4">
              <div className="sticky-top bg-white">
                <h4 className="header sticky-top">Messages</h4>
                <hr></hr>
              </div>
              {this.getUserDialogue()}
              {this.getUserDialogue()}
              {this.getUserDialogue(true)}
              {this.getUserDialogue()}
              {this.getUserDialogue()}
              {this.getUserDialogue()}
              {this.getUserDialogue()}
              {this.getUserDialogue()}
              {this.getUserDialogue()}
              {this.getUserDialogue()}
            </div>

            <div className="Message col-8 pt-0">
              
              <div className="sticky-top bg-white mt-0">
                <ProfileThumb name="Profile Name" isPro="true" />
                <hr></hr>
              </div>
              
              <div className="MessageSpace">
                {this.getUserMessage(false, "Hey")}
                {this.getUserMessage(true, "Whats Up?")}
                {this.getUserMessage(false, "Nothing just checking in on you")}
                {this.getUserMessage(true, "Oh well I'm doing good")}
                {this.getUserMessage(false, "How's the new job going for you?")}
                {this.getUserMessage(true, "Its good, theres alot more office politics than I'd like but overall I can't complain")}
                {this.getUserMessage(true, "Hows work going for you?")}
                {this.getUserMessage(false, "Everythings good still working on getting a promotion")}
                {this.getUserMessage(true, "Don't worry you'll get it soon")}
              </div>

              <div className="messageInput pt-0">
                <hr className="mt-0"></hr>
                  <div className="input-group p-0">
                    <input type="text" class="form-control" placeholder="Message..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
                    </div>
                  </div>
                </div>

            </div>

          </div>
        </div>
      </div>
    );
  }

}

export default MessagePage;