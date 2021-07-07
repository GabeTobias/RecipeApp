import React, { Component} from "react";
import { observer } from "mobx-react";

import Recipe from "../Recipe/Recipe"
import Suggested from "../Suggested";

@observer
class Saved extends Component {
  
  render() {
    return(
      <div className="Saved">
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        
        <div className="ScrollBar">
          <Suggested />
        </div>

      </div>
    );
  }

}

export default Saved;