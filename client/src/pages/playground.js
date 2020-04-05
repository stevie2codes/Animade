import React, { Component } from "react";
import "../sass/playground.scss";

class Playground extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="ideContainer">
          <textarea id="html" placeholder="HTML"></textarea>
          <textarea id="css" placeholder="CSS"></textarea>
          <textarea id="js" placeholder="JavaScript"></textarea>
          <iframe title="playground" id="code"></iframe>
        </div>
      </React.Fragment>
    );
  }
}

export default Playground;
