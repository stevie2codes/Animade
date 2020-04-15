import React, { useState, useEffect } from "react";
import NavBar from "../components/nav/nav";
import "../sass/profile.scss";
import Cookies from "js-cookie";
import API from "../utils/API";
function Profile(props) {
  const [activeUser] = useState(Cookies.get("name"));
  const [userPlaygroundCode, setUserPlaygroundCode] = useState();
  useEffect(activeUser => {
    API.getPlaygroundCode(activeUser)
      .then(data => {
        console.log(data);

        //setUserPlaygroundCode(playgroundCodeArray);
      })
      .catch(error => console.log(error));
  });

  return (
    <div>
      <div>
        <NavBar name={activeUser} />
      </div>
      <div className="profileContainer">
        <h2 className="userName">Welcome to your Dashboard: {activeUser}</h2>
      </div>
      <div>{}</div>
    </div>
  );
}

export default Profile;
