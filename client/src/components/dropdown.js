import React, { Component } from "react";
import { render } from "react-dom";
import DropdownList from "react-widgets/lib/DropdownList";
import "react-widgets/dist/css/react-widgets.css";

const animations = ["inYoFace", "outYoFace", "flipX", "flipY"];

class Dropdown extends Component {
  state = {};
  render() {
    return (
      <div className="listContainer col-sm-4 mx-auto ">
        <DropdownList
          data={animations}
          defaultValue={"Choose an Animation"}
          style={{
            fontWeight: "bolder",
            letterSpacing: "2px",
            fontFamily: "Montserrat"
          }}
        />
      </div>
    );
  }
}

export default Dropdown;
