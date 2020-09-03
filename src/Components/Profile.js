import React, { Component} from "react";
import { observer } from "mobx-react";

import headerSrc from "../Images/Landscape.png"
import profileSrc from "../Images/ProfileImg.png"

@observer
class Profile extends Component {

  constructor(props)
  {
    super(props);
    
    this.state = {
      headerImg: "25vh",
      profile: "9rem",
      profileTop: "-5rem",
      nameLeft: "11rem"
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => 
  {
    let scrollTop =window.scrollY;

    if(scrollTop > 100)
    {
      this.setState({
        headerImg:"0vh",
        profile:"5rem",
        profileTop:"-0.7rem",
        nameLeft: "7rem"
      });
    } else {
      this.setState({
        headerImg:"25vh",
        profile:"9rem",
        profileTop:"-5rem",
        nameLeft: "11rem"
      });
    }
  }


  render() {
    return(
      <div className="Profile">
      
        <div className="Card">
          <img className="hero" src={headerSrc} style={{height: this.state.headerImg}}/>
          
          <img className="ProfileImg" src={profileSrc} style={{height: this.state.profile, width: this.state.profile, marginTop: this.state.profileTop}}/>

          <h3 className="Name" style={{paddingLeft: this.state.nameLeft}}>Profile Name</h3>
          <h5 className="Skill" style={{paddingLeft: this.state.nameLeft}}>Professional</h5>

          <hr/>

          <div className="tabs">
            <a href="#"><h5 className="tabItem Active">Recipes</h5></a>
            <a href="#"><h5 className="tabItem">Following</h5></a>
            <a href="#"><h5 className="tabItem">Saved</h5></a>
          </div>

        </div>     
      
      </div>
    );
  }
}

export default Profile;