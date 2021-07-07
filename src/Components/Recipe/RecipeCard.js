import React, { Component} from "react";
import { observer } from "mobx-react";

import foodSrc from "../../Images/Food-1.png"
import store from "../../Store"

@observer
class RecipeCard extends Component {

  ChangeState(page) {
    store.SetPage(page);
  }

  render() {
    return(
      <div className="RecipeCard">
        <a href="#">
          <img className="hero" src={foodSrc} />
        </a>

        <div className="CardText">
        
          <div className="CardHeader">
            <a href="#">
              <h5 className="tag">{this.props.tag.toUpperCase()}</h5>
            </a>
            <small className="CardTimestamp">{this.props.time} hours ago</small>
          </div>

          <div className="LinkContainer">
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <a href="#" className="stretched-link" onClick={() => this.ChangeState('Recipe')}></a>
          </div>
        </div>
      
      </div>
    );
  }
}

export default RecipeCard;