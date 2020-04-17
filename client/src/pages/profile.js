import React, { useState, useEffect } from "react";
import NavBar from "../components/nav/nav";
import "../sass/profile.scss";
import Cookies from "js-cookie";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Isolated from "../components/isolatedSvg";
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
      <h1 className="d-flex justify-content-center profileName">
        {userPlaygroundCode.length === 0 ? (
          <a href="/playground">Go to Playground to save a playmation </a>
        ) : (
          `${userPlaygroundCode.length} Playmations by ${activeUser}`
        )}
      </h1>
      ;
      <div className="profileContainer">
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
                <div className="iconDisplay">
                  <Isolated />
                  <h3 className="profilePlaymations">{code.playmation_name}</h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
