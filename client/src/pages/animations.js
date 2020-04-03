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
        <p className="mt-5">Showing {count} animations</p>
        <div className="container animations my-5">
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

        <div class="box" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
              </div>
              <div class="modal-body m-5 p-5">
                {this.state.animations.map(data => (
                  <ul>
                    <li className="text-dark">
                      {data.name} {data.code}
                    </li>
                  </ul>
                ))}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default animation;
