import React, { useState } from "react";
import "../sass/home.scss";
import logo from "../mono-logo.svg";
import NavBar from "../components/nav/nav";
import Cookies from "js-cookie";
import ThreeScene from "../components/three";
import { Link } from "@material-ui/core";

const Home = () => {
  const [activeUser] = useState(Cookies.get("name"));

  return (
    <div>
      <div>
        <NavBar name={activeUser} />
      </div>

      <div className="homeContent">
        <img className="homeLogo" src={logo} alt="animade" />

        <h4 className="readyText">
          Ready-Made
          <span id="animations">Animations</span>
        </h4>
      </div>
      <Link href="signin">
        <button className="signInHome">Sign-In</button>
      </Link>
    </div>
  );
};

export default Home;
