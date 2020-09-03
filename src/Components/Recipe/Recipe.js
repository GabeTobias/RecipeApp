import React, { Component} from "react";
import { observer } from "mobx-react";

import RecipeCard from "./RecipeCard"
import ProfileThumb from "../ProfileThumb"

@observer
class Recipe extends Component {
  
  render() {
    return(
      <div className="Recipe">
        <div className="Card">
          <RecipeCard title="Fish Salad" time="5" tag="Salad" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A facilisi ante malesuada morbi parturient odio aliquet tellus tempor. Libero tristique fames commodo molestie orci amet rutrum viverra cursus."/>
          <ProfileThumb name="Profile Name" isPro="true"/>
        </div>
      </div>
    );
  }
}

export default Recipe;