import React, { Component} from "react";
import { observer } from "mobx-react";

import Recipe from "../Recipe/Recipe";

@observer
class RecipePage extends Component {
  
  getIngredient(ingredient) {
    return (
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id={ingredient}></input>
        <label className="form-check-label" for={ingredient}>
          {ingredient}
        </label>
      </div>
    );
  }

  render() {
    return(
      <div>
        <Recipe expanded={true}/>

        <div className="ScrollBar">
          <div className="RecipeInfo">
            <h5>Info</h5>
            <hr></hr>
            <p><b>Prep Time:</b> 15 min.</p>
            <p><b>Cook Time:</b> 35 min.</p>
            <p><b>Servings:</b> 20</p>
          </div>

          <div className="RecipeInfo">
            <h5>Ingredients</h5>
            <hr></hr>
            {this.getIngredient("1 cup butter")}
            {this.getIngredient("1/2 cup white sugar")}
            {this.getIngredient("2 cups all purpose flour")}
            {this.getIngredient("4 eggs")}
            {this.getIngredient("1 1/2 cups white sugar")}
            {this.getIngredient("1/4 cup all purpose flour")}
            {this.getIngredient("2 juiced lemons")}
          </div>

        </div>
      </div>
    );
  }

}

export default RecipePage;