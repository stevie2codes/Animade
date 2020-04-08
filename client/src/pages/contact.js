import React, { useState } from "react";
import NavBar from "../components/nav/nav";
import Cookies from "js-cookie";

const Contact = () => {
  const [activeUser] = useState({
    activeUser: Cookies.get("name")
  });

  return (
    <div>
    <NavBar name={activeUser}/>
    <h1>Contact</h1>
    </div>
  )
  
};

export default Contact;
