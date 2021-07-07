import React, { Component} from "react";
import { observer } from "mobx-react";

import RecipeCard from "./RecipeCard"
import ProfileThumb from "../Profile/ProfileThumb"

@observer
class Recipe extends Component {

  getDetails(number, title, details) {
    if(this.props.expanded) {
      return (
        <div className="RecipeSteps">

          <div className="Step">
            <h5 className="Number">{number}</h5>
            <h5 className="Title">{title}</h5>
            <p className="Details">{details}</p>
          </div>
        
          <hr className="mt-0 mb-1"></hr>

        </div>
      );
    } 
    else {
      return(<div></div>);
    }
  }

  getComments() {
    if(this.props.expanded) {
      return (
        <div className="RecipeComments">
        
          <hr className="mb-1"></hr>

          

        </div>
      );
    } 
    else {
      return(<div></div>);
    }
  }

  render() {
    return(
      <div className="Recipe">
        <div className="Card pb-3 mb-4">
          <RecipeCard title="Fish Salad" time="5" tag="Salad" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A facilisi ante malesuada morbi parturient odio aliquet tellus tempor. Libero tristique fames commodo molestie orci amet rutrum viverra cursus."/>
          {
            this.props.expanded ? <hr className="mt-0 mb-1"></hr> : <div></div>
          }
          
          {this.getDetails("1", "Preheat Oven", "Preheat oven to 350 degrees F (175 degrees C).")}
          {this.getDetails("2", "Blend Mix", "In a medium bowl, blend together softened butter, 2 cups flour and 1/2 cup sugar. Press into the bottom of an ungreased 9x13 inch pan.")}
          {this.getDetails("3", "First Bake", "Bake for 15 to 20 minutes in the preheated oven, or until firm and golden. In another bowl, whisk together the remaining 1 1/2 cups sugar and 1/4 cup flour. Whisk in the eggs and lemon juice. Pour over the baked crust.")}
          
          <ProfileThumb name="Profile Name" isPro="true"/>
          
          {/* {this.getComments()} */}

        </div>
      </div>
    );
  }
}

export default Recipe;