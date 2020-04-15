import React, { useState, useEffect } from "react";
import NavBar from "../components/nav/nav";
import "../sass/profile.scss";
import Cookies from "js-cookie";
import API from "../utils/API";
function Profile() {
  const [activeUser] = useState(Cookies.get("name"));
  const [userPlaygroundCode, setUserPlaygroundCode] = useState([]);

  useEffect(() => {
    API.getPlaygroundCode(activeUser)
      .then(data => {
        console.log(data.data);
        setUserPlaygroundCode(data.data);
      })
      .catch(error => console.log(error));
  }, [activeUser]);

  return (
    <div>
      <div>
        <NavBar name={activeUser} />
      </div>
      <div className="profileContainer">
        <h2 className="userName">Welcome to your Dashboard: {activeUser}</h2>

        {userPlaygroundCode.map(code => {
          return <li key={code._id}>{code._id}</li>;
        })}
      </div>
      <div>{}</div>
    </div>
  );
}

export default Profile;
