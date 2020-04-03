import React, { Component } from "react";
import AnimationContainer from "../components/animationContainer";
import { getAnimations } from "../services/animationService";
import "../sass/animationContainer.scss";

class animation extends Component {
  state = {
    animations: getAnimations()
  };
  render() {
    const { length: count } = this.state.animations;
    return (
      <React.Fragment>
        <AnimationContainer />
        <p>Showing {count} animations</p>
        <div className="container animations">
          <div className="row">
            <div className="col-md fallAway">
              <p>Fall Away</p>
            </div>
            <div className="col-md dipSet">
              <p>Dip Set</p>
            </div>
            <div className="col-md flubber">
              <p>Flubber</p>
            </div>
            <div className="col-md cartWheel">
              <p>CartWheel</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default animation;
