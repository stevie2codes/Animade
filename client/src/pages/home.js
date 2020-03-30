import React from "react";
import "../sass/home.scss";
import logo from "../logoPng.png";

const Home = () => {
  return (
    <div>
      <img className="homeLogo" src={logo} alt="animade" />;
      <h4 className="readyText">
        Ready-Made <h5 className="animations"> Animations</h5>
      </h4>
    </div>
  );
};

export default Home;
