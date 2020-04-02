import React from "react";
import "../../sass/navbar.scss";

function NavBar() {
  return (
    <div style={{ height: "30vmin" }} overflow="hidden">
      <svg
        className="my-line"
        preserveAspectRatio="none"
        viewBox="5 5 493 150"
        style={{ height: "100%", width: "100%" }}
      >
        <defs>
          <linearGradient id="gradient" x1="20%" y1="50%" x2="70%" y2="40%">
            <stop offset="0%" stopColor="#db6c6d" />
            <stop offset="100%" stopColor=" #ad54a4" />
          </linearGradient>
        </defs>
        <path
          fill="#212121"
          d="M-1.41 132.72c112.3-242.75 359.48 193.42 501.68-70.06L500 0H0z"
          stroke="url(#gradient)"
          strokeWidth="4"
          fillRule="nonzero"
        ></path>
      </svg>
    </div>
  );
}

export default NavBar;
