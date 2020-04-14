import React from "react";
import "../../sass/navbar.scss";
import { Link } from "react-router-dom";
import newLogo from "../../mono-logo.svg";

function NavBar(props) {
  return (
    <div style={{ height: "30vmin" }} overflow="hidden">
      <svg
        className="my-line"
        preserveAspectRatio="none"
        viewBox="5 5 493 150"
        style={{ height: "100%", width: "100%" }}
      >
        <defs>
          <radialGradient id="gradient" x1="40%" y1="50%" x2="70%" y2="50%">
            <stop offset="20%" stopColor="#2e2d2d" />
            <stop offset="100%" stopColor=" #212121" />
          </radialGradient>
        </defs>
        <defs>
          <linearGradient id="gradient2" x1="20%" y1="50%" x2="70%" y2="40%">
            <stop offset="0%" stopColor="#FE6B8B" />
            <stop offset="100%" stopColor="#FF8E53" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M-1.41 132.72c112.3-242.75 359.48 193.42 501.68-70.06L500 0H0z"
          stroke="url(#gradient2)"
          strokeWidth="3"
          fillRule="nonzero"
        ></path>
      </svg>

      <div className="nav nav-pills d-flex justify-content-end">
        <Link to="/">
          <img src={newLogo} className="iconAbove" id="logoSvg" alt="logo" />
          {/* <HomeCube /> */}
        </Link>

        <div className="navigation">
          <div className="nav-items d-flex">
            <Link to="/" className="nav-link ">
              Home
            </Link>
            <Link to="/animations" className="nav-link ">
              Animations
            </Link>
            <Link className="nav-link" to={{ pathname: "/playground" }}>
              Playground
            </Link>
            <Link to="/Contact" className="nav-link ">
              Contact
            </Link>
            {props.name !== undefined ? (
              <Link to="/Profile" className="nav-link ">
                {props.name}
              </Link>
            ) : (
              <Link to="/signup" className="nav-link ">
                Sign Up
              </Link>
            )}

            {props.name ? <button className="signOut">Logout</button> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
