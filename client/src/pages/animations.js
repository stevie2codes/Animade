import React, { Component } from "react";
import AnimationContainer from "../components/animationContainer";
import { getAnimations } from "../services/animationService";
import "../sass/animationContainer.scss";

class animation extends Component {
  state = {
    animations: getAnimations()
  };
  render() {
    return (
      <React.Fragment>
        <p>{this.state.animations.length}</p>
        <AnimationContainer />
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
