import React from "react";
import "../sass/home.scss";
import logo from "../logoPng.png";

const Home = () => {
  return (
    <div>
      <div className="homeContent">
        <img className="homeLogo" src={logo} alt="animade" />;
        <h4 className="readyText">
          Ready-Made
          <span id="animations"> ANiMations</span>
        </h4>
      </div>
    </div>
  );
};

export default Home;
