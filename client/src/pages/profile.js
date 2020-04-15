import React, { useState, useEffect } from "react";
import NavBar from "../components/nav/nav";
import "../sass/profile.scss";
import Cookies from "js-cookie";
import API from "../utils/API";
// import { Link } from "@material-ui/core";
import { Link } from "react-router-dom";
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
          return (
            <div key={code._id}>
              <Link
                to={{
                  pathname: "/playground/" + code._id,
                  state: {
                    fromProfile: true,
                    id: code._id,
                    html: code.html
                  }
                }}
              >
                <div className="profilePlaymations">{code.playmation_name}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
