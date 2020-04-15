import React, { useState } from "react";
import NavBar from "../components/nav/nav";
import "../sass/contact.scss";
import Cookies from "js-cookie";
import ThreeScene from "../components/three";
import ThreeScene2 from "../components/three2";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Repo from "../components/repo";

const linkStyles = { fontWeight: "bolder", letterSpacing: "2px" };

const Contact = () => {
  const [activeUser] = useState(Cookies.get("name"));

  return (
    <div>
      <NavBar name={activeUser} />

      <h1 className="d-flex justify-content-center authorText">Authors</h1>
      <div className="container d-flex justify-content-center authorContainer">
        <div className="row">
          <div className="squatchId col-">
            <ThreeScene />
            <div className="card" style={{ width: "20rem" }}>
              <div className="card-body">
                <h5 className="card-title">Cassidy Fortner</h5>
                <h6 className="card-subtitle mb-2 text-muted">Back-end</h6>

                <ul className="card-text">
                  {" "}
                  <h6>Tech Used</h6>
                  <li>React</li>
                  <li>Express</li>
                  <li>Mongoose</li>
                  <li>JS-Cookie</li>
                  <li>Axios</li>
                  <li className="lastLi">Heroku</li>
                </ul>

                <a
                  href="https://github.com/Cassquatch"
                  className="card-link"
                  style={linkStyles}
                >
                  <GitHubIcon fontSize="large" /> GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/cassidy-fortner-885065195/"
                  className="card-link"
                  style={linkStyles}
                >
                  <LinkedInIcon fontSize="large" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="twoToesId col-">
            <div className="sceneDiv">
              <ThreeScene2 />
            </div>
            <div className="card" style={{ width: "20rem" }}>
              <div className="card-body">
                <h5 className="card-title">Stephen Webb</h5>
                <h6 className="card-subtitle mb-2 text-muted">Front-end</h6>

                <ul className="card-text">
                  {" "}
                  <h6>Tech Used</h6>
                  <li>React</li>
                  <li>SASS</li>
                  <li>Bootstrap</li>
                  <li>Material-UI</li>
                  <li>CodeMirror</li>
                  <li className="lastLi">Three.JS</li>
                </ul>

                <a
                  href="https://github.com/stevie2codes"
                  className="card-link"
                  style={linkStyles}
                >
                  <GitHubIcon fontSize="large" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/js-webb/"
                  className="card-link"
                  style={linkStyles}
                >
                  <LinkedInIcon fontSize="large" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Repo />
    </div>
  );
};

export default Contact;
