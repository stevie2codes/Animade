import React, { useState, useEffect } from "react";
import NavBar from "../components/nav/nav";
import "../sass/profile.scss";
import Cookies from "js-cookie";
import API from "../utils/API";
function Profile() {
  const [activeUser] = useState(Cookies.get("name"));
  const [userPlaygroundCode, setUserPlaygroundCode] = useState();
  useEffect((activeUser) => {
    API.getPlaygroundCode(activeUser)
    .then(data => {
      console.log(data);

      //setUserPlaygroundCode(playgroundCodeArray);
    })
    .catch(error => console.log(error));

    //console.log(userPlaygroundCode);
  })

  return (
    <div>
      <NavBar name={activeUser} />

      <div className="profileContainer">
        <h1 className="userName">Welcome to your Dashboard: {activeUser}</h1>
      </div>
    </div>
  );
}

export default Profile;
