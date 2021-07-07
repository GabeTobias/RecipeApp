import React, { Component} from "react";
import { observer } from "mobx-react";

@observer
class NavBar extends Component {
  
  render() {
    return(
      <div className="NavBar">

        <div className="mt-0 center">
            <h3>Instructr.</h3>
        </div>

        <div class="row">
          <div className="col-2 mr-auto ml-3 mt-2">
            {/* <a href="#"><h6>Sign-out</h6></a> */}
          </div>

          <div className="search">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Search" />
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default NavBar;