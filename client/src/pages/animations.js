import React, { Component } from "react";
import AnimationContainer from "../components/animationContainer";
import ListGroup from "../components/listGroup";
import { getTypes } from "../services/typeList";
import { getAnimations } from "../services/animationService";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../sass/animationContainer.scss";
import "../sass/modal.scss";
import { Button } from "@material-ui/core";
import Save from "@material-ui/icons/Save";
import Like from "@material-ui/icons/ThumbUpSharp";
import Pagination from "../components/pagination";
import { paginate } from "../services/paginate";
import NavBar from "../components/nav/nav";
import Cookies from "js-cookie";

class animation extends Component {
  state = {
    animations: [],
    animation_code: " ",
    animation_name: " ",
    copied: false,
    pageSize: 4,
    currentPage: 1,
    types: [],
    activeUser: Cookies.get("name")
  };

  componentDidMount() {
    const types = [{ type: "All" }, ...getTypes()];
    this.setState({ animations: getAnimations(), types });
  }
  handleSelection = function(animation) {
    this.setState({
      animation_code: animation.code,
      animation_name: animation.name
    });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleTypeSelect = type => {
    this.setState({ selectedType: type, currentPage: 1 });
  };

  render() {
    const {
      animation_code,
      animation_name,
      pageSize,
      currentPage,
      selectedType
    } = this.state;

    const filtered =
      selectedType && selectedType._id
        ? this.state.animations.filter(a => a.type._id === selectedType._id)
        : this.state.animations;
    const myAnimations = paginate(filtered, currentPage, pageSize);

    const { length: count } = this.state.animations;

    return (
      <div>
        <div>
          <NavBar name={this.state.activeUser} />
        </div>
        <div className="container">
          <AnimationContainer />
          <p className="mt-1">
            Viewing {filtered.length}/{count} animations
          </p>

          <ListGroup
            items={this.state.types}
            onTypeSelect={this.handleTypeSelect}
            selectedType={this.state.selectedType}
          />

          <div className="container animations pt-5">
            {myAnimations.map(animation => (
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
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />

          <div className="box " role="dialog">
            <div className="modal-dialog " role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Animation Name: {animation_name}
                  </h5>
                </div>
                <div className="modal-body m-2 ">
                  <ul className="ul">
                    <li
                      className="codeOutput"
                      value={animation_code}
                      onChange={({ target: { value } }) =>
                        this.setState({ value, copied: false })
                      }
                    >
                      {animation_code}{" "}
                      <CopyToClipboard
                        text={animation_code}
                        onCopy={() => this.setState({ copied: true })}
                      >
                        <div className="modal-footer ">
                          <Button
                            type="button"
                            size="large"
                            color="secondary"
                            variant="outlined"
                            endIcon={<Save />}
                          >
                            Copy
                          </Button>
                        </div>
                      </CopyToClipboard>
                    </li>
                    <Button
                      type="button"
                      size="large"
                      color="primary"
                      variant="outlined"
                      endIcon={<Like />}
                    >
                      Like
                    </Button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default animation;
