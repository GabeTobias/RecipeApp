import React, { Component} from "react";
import { observer } from "mobx-react";

import foodSrc from "../../Images/Food-1.png"

@observer
class RecipeCard extends Component {

  render() {
    return(
      <div className="RecipeCard">
        <img className="hero" src={foodSrc} />

        <div className="CardText">
        
          <div className="CardHeader">
            <h5 className="tag">{this.props.tag.toUpperCase()}</h5>
            <small className="CardTimestamp">{this.props.time} hours ago</small>
          </div>

          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>

        </div>
      
      </div>
    );
  }
}

export default RecipeCard;