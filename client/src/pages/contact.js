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
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="squatchId col-">
            <ThreeScene />
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Cassidy Fortner</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Full-Stack Wizard
                </h6>
                <p className="card-text">
                  "Im here for it"
                  <br /> -squatch 2020
                </p>

                <a
                  href="https://github.com/Cassquatch"
                  className="card-link"
                  style={linkStyles}
                >
                  <GitHubIcon /> GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/cassidy-fortner-885065195/"
                  className="card-link"
                  style={linkStyles}
                >
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="twoToesId col-">
            <ThreeScene2 />
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Stephen Webb</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Full-Stack Wizard
                </h6>
                <p className="card-text">"Wheres the box shadow go?" -2toes</p>
                <a
                  href="https://github.com/stevie2codes"
                  className="card-link"
                  style={linkStyles}
                >
                  <GitHubIcon /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/js-webb/"
                  className="card-link"
                  style={linkStyles}
                >
                  <LinkedInIcon /> LinkedIn
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
