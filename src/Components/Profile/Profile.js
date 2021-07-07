import React, { Component } from "react";
import { observer } from "mobx-react";

import headerSrc from "../../Images/Landscape.png"
import profileSrc from "../../Images/ProfileImg.png"

@observer
class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      headerImg: "25vh",
      profile: "9rem",
      profileTop: "-5rem",
      hrTop: "1.8rem",
      nameLeft: "11rem"
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = window.scrollY;

    if (scrollTop > 100) {
      this.setState({
        headerImg: "0vh",
        profile: "4rem",
        profileTop: "-0.6rem",
        hrTop: "1.4rem",
        nameLeft: "5rem"
      });
    } else {
      this.setState({
        headerImg: "25vh",
        profile: "9rem",
        profileTop: "-5rem",
        hrTop: "1.8rem",
        nameLeft: "11rem"
      });
    }
  }

  changeState(state) {
    this.props.store.SetProfileState(state);
  }

  isHighlighted(state) {
    return (
      (this.props.store.ProfileState == state) ? "tabItem Active" : "tabItem"
    );
  }

  render() {
    return (
      <div className="Profile">

        <div className="Card">
          <img className="hero" src={headerSrc} style={{ height: this.state.headerImg }} />

          <img className="ProfileImg" src={profileSrc} style={{ height: this.state.profile, width: this.state.profile, marginTop: this.state.profileTop }} />

          <h3 className="Name" style={{ paddingLeft: this.state.nameLeft }}>Profile Name</h3>
          <h5 className="Skill" style={{ paddingLeft: this.state.nameLeft }}>Professional</h5>

          <hr style={{ marginTop: this.state.hrTop }} />

          <div className="tabs">
            <a href="#" onClick={() => this.changeState("Instructions")} ><h5 className={this.isHighlighted("Instructions")} >Recipes</h5></a>
            <a href="#" onClick={() => this.changeState("Following")}><h5 className={this.isHighlighted("Following")}>Following</h5></a>
            <a href="#" onClick={() => this.changeState("Saved")}><h5 className={this.isHighlighted("Saved")}>Saved</h5></a>
          </div>

        </div>

      </div>
    );
  }
}

export default Profile;