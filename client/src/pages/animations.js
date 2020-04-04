import React, { Component } from "react";
import AnimationContainer from "../components/animationContainer";
import { getAnimations } from "../services/animationService";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../sass/animationContainer.scss";
import "../sass/modal.scss";

class animation extends Component {
  state = {
    animations: getAnimations(),
    animation_code: " ",
    animation_name: " ",
    copied: false
  };

  handleSelection = function(animation) {
    this.setState({
      animation_code: animation.code,
      animation_name: animation.name
    });
  };

  render() {
    const { length: count } = this.state.animations;
    return (
      <React.Fragment>
        <AnimationContainer />
        <p className="mt-5">Showing {count} animations</p>
        <div className="container animations my-5">
          {this.state.animations.map(animation => (
            <div key={animation.id} className="row">
              <div
                className={animation.name}
                id={animation.id}
                onClick={() => this.handleSelection(animation)}
              >
                <p>{animation.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="box " role="dialog">
          <div className="modal-dialog " role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Animation Name: {this.state.animation_name}
                </h5>
              </div>
              <div className="modal-body m-2 ">
                <ul className="ul">
                  <li
                    className="codeOutput"
                    value={this.state.animation_code}
                    onChange={({ target: { value } }) =>
                      this.setState({ value, copied: false })
                    }
                  >
                    {this.state.animation_code}{" "}
                    <CopyToClipboard
                      text={this.state.animation_code}
                      onCopy={() => this.setState({ copied: true })}
                    >
                      <div className="modal-footer ">
                        <button type="button" className="btn btn-primary">
                          Copy to clipboard
                        </button>
                      </div>
                    </CopyToClipboard>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default animation;
