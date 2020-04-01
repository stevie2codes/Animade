import React from "react";
import "../sass/animationContainer.scss";
import logo from "../logo.svg";

const AnimationContainer = () => {
  return (
    <div className="container d-flex p-5">
      <img
        className="row m-auto playLogo"
        src={logo}
        alt="logo"
        style={{
          borderRadius: "50%"
        }}
      />
    </div>
  );
};

export default AnimationContainer;
