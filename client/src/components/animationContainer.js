import React from "react";
import "../sass/animationContainer.scss";
import logo from "../mono-logo.svg";

//this component only displays the logo
const AnimationContainer = () => {
  return (
    <div className="container d-flex p-2">
      <img
        className="row m-auto playLogo"
        src={logo}
        alt="logo"
        style={{
          borderRadius: "0%"
        }}
      />
    </div>
  );
};

export default AnimationContainer;
