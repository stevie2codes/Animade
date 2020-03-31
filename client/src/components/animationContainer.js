import React from "react";
import "../sass/animationContainer.scss";

const AnimationContainer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
      </div>
      <div className="row">
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
      </div>
      <div className="row">
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
        <div className="col-sm">One of three columns</div>
      </div>
    </div>
  );
};

export default AnimationContainer;
