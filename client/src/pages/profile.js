import React, { useState } from "react";
import NavBar from "../components/nav/nav";
import "../sass/profile.scss";
import Cookies from "js-cookie";
function Profile() {
  const [activeUser] = useState(Cookies.get("name"));

  return (
    <div>
      <NavBar name={activeUser} />
      <div className="profileContainer">
        <h1 className="userName">{activeUser}</h1>
        <button className="signOut">Sign Out</button>
      </div>
    </div>
  );
}

export default Profile;
