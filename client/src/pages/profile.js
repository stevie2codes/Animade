import React, {useState} from "react";
import NavBar from "../components/nav/nav";

import Cookies from "js-cookie";
function Profile() {
  const [activeUser] = useState({
    activeUser: Cookies.get("name")
  });
  
  
    return (
   <div>
        <NavBar name={activeUser}/>
        <h1>Profile</h1>
    </div>
        
       
      
    );
  }


export default Profile;
